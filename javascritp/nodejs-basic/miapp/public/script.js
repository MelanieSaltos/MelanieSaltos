document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registration-form');
    
    registrationForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(registrationForm);
        const userData = {
            username: formData.get('username'),
            email: formData.get('email'),
            password: formData.get('password')
        };
        
        try {
            const response = await fetch('/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });
            
            if (response.ok) {
                alert('Registro exitoso');
                registrationForm.reset();
            } else {
                alert('Error en el registro');
            }
        } catch (error) {
            console.error(error);
            alert(' OTRO Error en el registro');
        }
    });
});
