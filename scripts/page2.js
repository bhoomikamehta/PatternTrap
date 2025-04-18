document.addEventListener("DOMContentLoaded", function () {
    // Set minimum date for arrival and departure to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById("arrival-date").min = today;
    document.getElementById("departure-date").min = today;
    
    // Ensure departure date is after arrival date
    document.getElementById("arrival-date").addEventListener("change", function() {
      document.getElementById("departure-date").min = this.value;
      
      // If departure date is before new arrival date, reset it
      if (document.getElementById("departure-date").value < this.value) {
        document.getElementById("departure-date").value = this.value;
      }
    });
    
    // Validate passport number format (simple validation)
    document.getElementById("passport-number").addEventListener("input", function() {
      this.value = this.value.toUpperCase().replace(/[^A-Z0-9]/g, '');
    });
    
    // Set up tooltips for strongly recommended fields
    const recommendedFields = document.querySelectorAll('.strongly-recommended');
    recommendedFields.forEach(field => {
      field.title = "This information helps us provide a personalized experience";
    });
  });