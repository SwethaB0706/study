const env = process.env;


const loadAnotherMessage = async () => {
    return await fetch(`${env.REACT_APP_BACKEND_URL}/anothermessage`, {
        method: "POST",
        headers: [
            {
                "Authorization": "BEARER <token>"
            }
        ]
    })
        .then(response => response.text())
        .catch(error => error);
};


const loadMessage = async () => {
    return await fetch(`${env.REACT_APP_BACKEND_URL}/message`)
        .then(response => response.text())
        .catch(error => error);
};



export default loadMessage;