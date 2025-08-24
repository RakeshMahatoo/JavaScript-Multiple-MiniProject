 // Get a reference to the timer element in the DOM.
        const timerElement = document.getElementById("timer");

        // Set the target date for the countdown.
        const targetDate = new Date('2026-01-01T00:00:00');

        /**
         * Updates the countdown timer display every second.
         */
        function updateCountdown() {
            // Get the current date and time.
            const currentDate = new Date();

            // Calculate the time difference in milliseconds.
            const timeDifference = targetDate - currentDate;

            // If the countdown is over, display a message and stop the timer.
            if (timeDifference <= 0) {
                timerElement.innerHTML = "Happy New Year!";
                clearInterval(countdownInterval);
                return;
            }

            // Calculate years, days, hours, minutes, and seconds from the time difference.
            const totalSeconds = Math.floor(timeDifference / 1000);
            const days = Math.floor(totalSeconds / (3600 * 24));
            const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const seconds = totalSeconds % 60;
            
            // Format the output string.
            const timerString = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

            // Update the HTML content with the new time.
            timerElement.innerHTML = timerString;
        }

        // Call the update function once immediately to avoid a 1-second delay.
        updateCountdown();

        // Use setInterval to call the updateCountdown function every 1000 milliseconds (1 second).
        const countdownInterval = setInterval(updateCountdown, 1000);