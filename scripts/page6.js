{
  "scripts": [
    {
      "type": "inline",
      "purpose": "Dynamically updates total price when Golden Circle membership checkbox is toggled. Adds \u20ac50 if unchecked.",
      "script": "function updateTotal() {\n  const isChecked = document.getElementById(\"golden-check\").checked;\n  const base = 561.92 + 15 + 45;\n  const total = isChecked ? base : base + 50;\n  document.getElementById(\"total\").innerText = \"\u20ac\" + total.toFixed(2);\n}"
    },
    {
      "type": "inline",
      "purpose": "Displays a success modal with a green checkmark when 'FINAL PAYMENT' is clicked.",
      "script": "function submitOrder() {\n  document.getElementById(\"modal\").classList.add(\"active\");\n  document.getElementById(\"modalOverlay\").classList.add(\"active\");\n}"
    },
    {
      "type": "inline",
      "purpose": "Closes the modal after payment confirmation.",
      "script": "function closeModal() {\n  document.getElementById(\"modal\").classList.remove(\"active\");\n  document.getElementById(\"modalOverlay\").classList.remove(\"active\");\n}"
    }
  ]
}