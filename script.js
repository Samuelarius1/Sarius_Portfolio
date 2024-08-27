        // Typing effect
        const typingEffect = document.getElementById('typingEffect');
        const textArray = ["Web Developer", "Writer", "Designer"];
        let currentIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentText = textArray[currentIndex];
            if (isDeleting) {
                typingEffect.textContent = currentText.substring(0, charIndex--);
                if (charIndex < 0) {
                    isDeleting = false;
                    currentIndex = (currentIndex + 1) % textArray.length;
                    setTimeout(type, 500);
                } else {
                    setTimeout(type, 100);
                }
            } else {
                typingEffect.textContent = currentText.substring(0, charIndex++);
                if (charIndex > currentText.length) {
                    isDeleting = true;
                    setTimeout(type, 500);
                } else {
                    setTimeout(type, 100);
                }
            }
        }
        type();

        // Dropdown functionality
        function toggleDropdown(id) {
            const content = document.getElementById(id);
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        }

        // Notification functionality
        document.getElementById('notificationBell').addEventListener('click', () => {
            const count = document.getElementById('notificationCount');
            count.textContent = parseInt(count.textContent) + 1;
        });