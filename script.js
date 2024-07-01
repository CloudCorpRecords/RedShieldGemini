document.getElementById('codeForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const url = document.getElementById('url').value;
    const vulnerability = document.getElementById('vulnerability').value;

    try {
        const response = await fetch('https://red-team-gemini-cloudcorprecord.replit.app/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url, vulnerability, model: 'gemini-1.5-flash', parameters: {} }),
        });

        const result = await response.json();

        if (response.ok) {
            document.getElementById('generatedCode').textContent = result.text ?? 'No output';
            document.getElementById('threatLevel').textContent = result.threat_level ?? 'N/A';
            document.getElementById('detailedAnalysis').innerHTML = result.analysis ?? 'No content to analyze';
        } else {
            document.getElementById('generatedCode').textContent = `Error: ${result.error ?? 'Unknown error'}`;
            document.getElementById('threatLevel').textContent = 'N/A';
            document.getElementById('detailedAnalysis').textContent = 'No content to analyze';
        }
    } catch (error) {
        document.getElementById('generatedCode').textContent = `Error: ${error.message}`;
        document.getElementById('threatLevel').textContent = 'N/A';
        document.getElementById('detailedAnalysis').textContent = 'No content to analyze';
    }
});