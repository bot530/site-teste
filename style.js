* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: #f1f1f1;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.container {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 800px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

.left-panel {
    background-color: #0d1b3f;
    color: white;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 20px;
    text-align: center;
}

.left-panel h2 {
    margin-bottom: 10px;
    font-size: 1.5rem;
}

.right-panel {
    background-color: #f5f5f5;
    width: 100%;
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

form {
    display: flex;
    flex-direction: column;
}

label {
    margin-top: 10px;
    font-weight: bold;
    font-size: 0.9rem;
}

input, select {
    margin-top: 5px;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
}

button {
    margin-top: 20px;
    padding: 12px;
    background-color: #0d1b3f;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
    font-size: 1rem;
}

button:hover {
    background-color: #0b1633;
}

/* Media Query para telas maiores */
@media (min-width: 768px) {
    .container {
        flex-direction: row;
        height: 400px;
    }
    
    .left-panel {
        width: 40%;
        padding: 20px;
    }
    
    .right-panel {
        width: 60%;
        padding: 40px;
    }
}
