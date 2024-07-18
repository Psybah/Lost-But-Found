from flask import Flask, render_template, request, redirect, url_for, session
import sqlite3
import os

app = Flask(__name__)
app.secret_key = os.urandom(24)

# Function to initialize the database
def init_db():
    conn = sqlite3.connect('lost_found.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS users
                 (id INTEGER PRIMARY KEY AUTOINCREMENT,
                  name TEXT NOT NULL,
                  email TEXT NOT NULL UNIQUE,
                  password TEXT NOT NULL)''')
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
        name = request.form['name']
        email = request.form['email']
        password = request.form['password']
        
        conn = sqlite3.connect('lost_found.db')
        c = conn.cursor()
        c.execute("SELECT * FROM users WHERE email = ? AND password = ?", (email, password))
        user = c.fetchone()
        conn.close()
        
        if user:
            session['user_id'] = user[0]
            return redirect(url_for('home'))
        else:
            return "Login Failed. Invalid email or password."
    return render_template('login.html')

@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        password = request.form['password']
        
        conn = sqlite3.connect('lost_found.db')
        c = conn.cursor()
        try:
            c.execute("INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
                      (name, email, password))
            conn.commit()
        except sqlite3.IntegrityError:
            return "User with this email already exists."
        conn.close()
        
        return redirect(url_for('login'))
    return render_template('signup.html')

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

@app.route('/search', methods=['POST'])
def search():
    search_term = request.form['search_term']
    
    conn = sqlite3.connect('lost_found.db')
    c = conn.cursor()
    c.execute("SELECT * FROM reports WHERE item_description LIKE ?", ('%' + search_term + '%',))
    search_results = c.fetchall()
    conn.close()
    
    return render_template('search_results.html', results=search_results)

@app.route('/filter', methods=['POST'])
def filter():
    category = request.form.get('category', '')
    city = request.form.get('city', '')
    state = request.form.get('state', '')
    detailed_address = request.form.get('detailed_address', '')
    month = request.form.get('month', '')
    date = request.form.get('date', '')
    time = request.form.get('time', '')

    query = "SELECT * FROM reports WHERE 1=1"
    params = []

    if category:
        query += " AND item_category = ?"
        params.append(category)
    if city:
        query += " AND location LIKE ?"
        params.append('%' + city + '%')
    if state:
        query += " AND location LIKE ?"
        params.append('%' + state + '%')
    if detailed_address:
        query += " AND location LIKE ?"
        params.append('%' + detailed_address + '%')
    if month:
        query += " AND date LIKE ?"
        params.append('%' + month + '%')
    if date:
        query += " AND date LIKE ?"
        params.append('%' + date + '%')
    if time:
        query += " AND date LIKE ?"
        params.append('%' + time + '%')

    conn = sqlite3.connect('lost_found.db')
    c = conn.cursor()
    c.execute(query, params)
    filter_results = c.fetchall()
    conn.close()

    return render_template('search_results.html', results=filter_results)

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

@app.route('login.html')
def login_page():
    return render_template('login.html')

@app.route('signup.html')
def signup_page():
    return render_template('signup.html')

@app.route('report_lost_items.html')
def report_lost_items_page():
    return render_template('report_lost_items.html')

@app.route('search_lost_items.html')
def search_lost_items_page():
    return render_template('search_lost_items.html')

if __name__ == '__main__':
    init_db()
    app.run(debug=True)

# Run the app.py file