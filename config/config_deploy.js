var config_deploy = {
    
    // obligatory fields
    
    // the experimentID is needed to recover data from the _babe server app
    // you receive the experimentID when you create the experiment using the _babe server app
    
    "experimentID": "19",

    // set deployment method; use one of:
    //'debug', 'localServer', 'MTurk', 
    // 'MTurkSandbox', 'Prolific', 'directLink'
    "deployMethod" : "Prolific", 
    
    // optional fields
    // set the prolific completion URL if the deploy method is "Prolific"
    // the URL should look something like this - https://app.prolific.ac/submissions/complete?cc=EZXBK7UQ
    "prolificURL": "https://app.prolific.ac/submissions/complete?cc=ZADBZUYX",

    // who to contact in case of trouble
    "contact_email": "exprag@gmail.com", 
};