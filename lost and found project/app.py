from flask import Flask, render_template, request, redirect, url_for
import sqlite3

app = Flask(__name__)

# Function to initialize the database
def init_db():
    conn = sqlite3.connect('lost_found.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS reports
                 (id INTEGER PRIMARY KEY AUTOINCREMENT,
                  item_category TEXT NOT NULL,
                  location TEXT NOT NULL,
                  date TEXT NOT NULL,
                  item_description TEXT NOT NULL,
                  email TEXT NOT NULL,
                  phone_number TEXT NOT NULL)''')
    conn.commit()
    conn.close()

@app.route('/')
def home():
    return render_template('homepage.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        # Implement login logic here
        name = request.form['name']
        email = request.form['email']
        password = request.form['password']
        # Authenticate user and redirect appropriately
        return redirect(url_for('home'))
    return render_template('login.html')

@app.route('/report', methods=['GET', 'POST'])
def report():
    if request.method == 'POST':
        item_category = request.form['item_category']
        location = request.form['location']
        date = request.form['date']
        item_description = request.form['item_description']
        email = request.form['email']
        phone_number = request.form['phone_number']

        conn = sqlite3.connect('lost_found.db')
        c = conn.cursor()
        c.execute("INSERT INTO reports (item_category, location, date, item_description, email, phone_number) VALUES (?, ?, ?, ?, ?, ?)",
                  (item_category, location, date, item_description, email, phone_number))
        conn.commit()
        conn.close()

        return redirect(url_for('home'))
    return render_template('report_lost_items.html')

@app.route('/reports')
def reports():
    conn = sqlite3.connect('lost_found.db')
    c = conn.cursor()
    c.execute("SELECT * FROM reports")
    all_reports = c.fetchall()
    conn.close()
    return render_template('reports.html', reports=all_reports)

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/faq')
def faq():
    return render_template('faq.html')

@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        password = request.form['password']
        # Add user to the database (implement your user handling logic here)
        return redirect(url_for('login'))
    return render_template('signup.html')

if __name__ == '__main__':
    init_db()
    app.run(debug=True)

