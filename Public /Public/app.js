// AI Chat Simulation
async function askAI() {
    const input = document.getElementById("aiInput").value;
    const reply = document.getElementById("aiReply");
    if(input === "") { reply.innerText = "Please type a question!"; return; }
    reply.innerText = "Thinking...";
    setTimeout(() => {
        reply.innerText = `AI Reply: We have services related to "${input}". Contact us for details.`;
    }, 1000);
}

// M-Pesa Payment Simulation
function pay() {
    const phone = document.getElementById("phone").value;
    const amount = document.getElementById("amount").value;
    const status = document.getElementById("paymentStatus");
    if(phone === "" || amount === "") { status.innerText = "Enter phone number and amount!"; return; }
    status.innerText = "Processing payment...";
    setTimeout(() => {
        status.innerText = `Payment of KES ${amount} from ${phone} successful!`;
    }, 1500);
}

// Dashboard placeholder functions
function addEquipment() { alert("Function to add equipment will be connected to backend later."); }
