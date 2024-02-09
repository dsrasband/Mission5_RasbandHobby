    $('#calculate').click(function () {
        // Get the value of hours entered by the user
        var hours = parseFloat($('#hours').val());

        // Check if the entered value is a positive number
        if (isNaN(hours) || hours <= 0) {
            alert('Please enter a positive number for hours of coaching requested.');
            // Clear what the user had entered
            $('#hours').val('');
            // Refocus on hours input
            $('#hours').focus();
            return;
        }

        // Get the value of fee per hour
        var feePerHour = parseFloat($('#fee').val());

        // Calculate the total cost
        var totalCost = hours * feePerHour;

        // Output the result to the total input box
        $('#total').val(totalCost.toFixed(2)); 

        // Make the total uneditable
        $('#total').prop('readonly', true);

    })

