
function calculateOriginalAmount() {
    const finalAmount = parseFloat(document.getElementById('finalAmount').value);
    const gstPercentage = parseFloat(document.getElementById('gstPercentage').value);

    if (isNaN(finalAmount) || isNaN(gstPercentage)) {
      document.getElementById('result').innerText = 'Please enter valid numbers';
      document.getElementById('result').className = 'error';

      return;
    }

    const originalAmount = finalAmount / (1 + gstPercentage / 100);

    document.getElementById('result').classList.remove("error")
    document.getElementById('result').innerText = `Original Amount (before GST): ${originalAmount.toFixed(2)}`;

  }