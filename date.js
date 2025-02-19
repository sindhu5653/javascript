function updateDateTime() {
    const now = new Date();
    const formattedDateTime = now.toString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
    document.getElementById('datetime').textContent = formattedDateTime;
}
setInterval(updateDateTime, 1000);