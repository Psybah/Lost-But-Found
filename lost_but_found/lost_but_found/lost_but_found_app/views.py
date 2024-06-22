from django.shortcuts import render, redirect
from django.contrib.auth import get_user_model

def register(request):
    if request.method == 'POST':
        # Get form data
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']

        # Basic validation (replace with more robust validation)
        if len(username) < 6:
            error_message = "Username must be at least 6 characters long."
            return render(request, 'registration/signup.html', {'error': error_message})
        if len(password) < 8:
            error_message = "Password must be at least 8 characters long."
            return render(request, 'registration/signup.html', {'error': error_message})

        # Create a new user (using get_user_model for flexibility)
        user = get_user_model().objects.create_user(username, email, password)
        user.save()

        # Registration successful (redirect to login page)
        return redirect('login')  # Replace with your login URL name

    # If not a POST request, render the registration form
    return render(request, 'registration/signup.html')

