function startJob() {
    const status = document.getElementById('status');
    status.innerText = '⏳ Job request sent to AI Swarm...';
    setTimeout(() => {
        status.innerText = '✅ GPU Job confirmed. Compute cycle initiated. Payment pending.';
    }, 2000);
}
