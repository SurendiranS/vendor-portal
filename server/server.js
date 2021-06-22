// const express = require('express')
// const app = express()
// app.listen(3000, ()=>{
//     console.log('Server Started')
// })

// KC#01int%^&


const express = require('express');
const parser = require('xml-js');
const request = require('request');
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

// for angular sserver connection
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "*");
    next();
});

app.post('/login', (req, res) => {
    const username = req.body.username;
    const pwd = req.body.password;
    const postData = `<?xml version="1.0" encoding="UTF-8"?>
    <ns0:ZFM_POO_VENDOR_AUTH xmlns:ns0="urn:sap-com:document:sap:rfc:functions">
       <PASSWORD>PASS1</PASSWORD>
       <USERNAME>1</USERNAME>
    </ns0:ZFM_POO_VENDOR_AUTH>`;
    var options = {
        url: 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/poo/vendauth',
        headers: {
            'Content-Type': 'application/xml',
            'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ=='
        },
        body: postData
    }
    request.post(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            let json = JSON.parse(response.body);
            res.send(json);
            console.log(json);
            var time = new Date();
            console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
        }
        else {
            console.log("error");
        }
    })
})

// --------------------------------------------------------------------------------------------------
//customer inquiry

app.post('/inquiry', (req, res) => {
    // const username=req.body.id;
    const username = 0000000018;
    //username=parseInt(id);
    //const pwd=req.body.password;
    const postData = `<?xml version="1.0" encoding="UTF-8"?>
    <ns0:MT_CUST_INQ_REQ xmlns:ns0="http://pooja_custom_inquirydetails.com">
      <CUSTOMER_ID>${username}</CUSTOMER_ID>
    </ns0:MT_CUST_INQ_REQ>`;
    var options = {
        url: 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/poo/inquiry',
        headers: {
            'Content-Type': 'application/xml',
            'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ=='
        },
        body: postData
    }
    request.post(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            let json = JSON.parse(response.body);
            json = json['IT_FINAL'];
            res.send(json);
            console.log(json);
            var time = new Date();
            console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
        } else {
            console.log("error")
        }
    })
})

//customer debit
app.post('/debit', (req, res) => {
    const username = req.body.id;
    //const pwd=req.body.password;
    //console.log(req.body);
    const postData = `<?xml version="1.0" encoding="UTF-8"?>
    <ns0:MT_CUST_DEBITMEMO_REQ xmlns:ns0="http://pooja_custom_debitMemo.com">
      <CUSTOMER_ID>18</CUSTOMER_ID>
    </ns0:MT_CUST_DEBITMEMO_REQ>`;
    var options = {
        url: 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/debitmemo',
        headers: {
            'Content-Type': 'application/xml',
            'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ=='
        },
        body: postData
    }
    request.post(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            let json = JSON.parse(response.body);
            json = json['OUTPUT_TABLE'];
            res.send(json);
            console.log(json);
            var time = new Date();
            console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
        } else {
            console.log("error")
        }
    })
})

//customer credit
app.post('/credit', (req, res) => {
    const username = req.body.id;
    //const pwd=req.body.password;
    //console.log(req.body);
    const postData = `<?xml version="1.0" encoding="UTF-8"?>
    <ns0:MT_CUST_CREDITMEMO_REQ xmlns:ns0="http://pooja_custom_creditMemo.com">
      <CUSTOMER_ID>18</CUSTOMER_ID>
    </ns0:MT_CUST_CREDITMEMO_REQ>`;
    var options = {
        url: 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/creditmemo',
        headers: {
            'Content-Type': 'application/xml',
            'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ=='
        },
        body: postData
    }
    request.post(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            let json = JSON.parse(response.body);
            json = json['OUTPUT_TABLE'];
            res.send(json);
            console.log(json);
            var time = new Date();
            console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
        } else {
            console.log("error")
        }
    })
})

// delivery
app.post('/delivery', (req, res) => {
    const username = req.body.id;
    //username=parseInt(id);
    //const pwd=req.body.password;
    console.log(username);
    const postData = `<?xml version="1.0" encoding="UTF-8"?>
    <ns0:MT_CUST_LIS_DEL_REQ xmlns:ns0="http://pooja_custom_lis_delivery">
       <CUSTOMER_ID>18</CUSTOMER_ID>
    </ns0:MT_CUST_LIS_DEL_REQ>`;
    var options = {
        url: 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/poo/listdelivery',
        headers: {
            'Content-Type': 'application/xml',
            'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ=='
        },
        body: postData
    }
    request.post(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            let json = JSON.parse(response.body)
            json = json['ITEM_TABLE'];
            res.send(json);
            console.log(json);
            var time = new Date();
            console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
        } else {
            console.log("error")
        }
    })
})


//profile
app.post('/vendorDetails', (req, res) => {
    const username = req.body.id;
    //const pwd=req.body.password;
    console.log(username);
    const postData = `<?xml version="1.0" encoding="UTF-8"?>
    <ns0:ZFM_POO_VENDOR_DETAILS xmlns:ns0="urn:sap-com:document:sap:rfc:functions">
    <VENDOR_ID>SA1000</VENDOR_ID>
    </ns0:ZFM_POO_VENDOR_DETAILS>`;
    var options = {
        url: 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/poo/venddetails',
        headers: {
            'Content-Type': 'application/xml',
            'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ=='
        },
        body: postData
    }
    request.post(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            let json = JSON.parse(response.body);
            res.send(json);
            console.log(json);
            var time = new Date();
            console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());

        } else {
            console.log("error")
        }
    })
})

//Customer Payment aging
app.post('/payment', (req, res) => {
    const postData = `<?xml version="1.0" encoding="UTF-8"?>
    <ns0:MT_CUST_PAYMENTAGING_REQ xmlns:ns0="http://pooja_custom_paymentAging.com">
      <CUSTOMER_ID>18</CUSTOMER_ID>
       <DATE></DATE>
    </ns0:MT_CUST_PAYMENTAGING_REQ>`;
    var options = {
        url: 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/paymentaging',
        headers: {
            'Content-Type': 'application/xml',
            'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ=='
        },
        body: postData
    }
    request.post(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            let json = JSON.parse(response.body);
            json = json['IT_TABLE'];
            res.send(json);
            console.log(json);
            var time = new Date();
            console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
        } else {
            console.log("error")
        }
    })
})


//Goods reciept
app.post('/goods/HEADER_TABLE', (req, res) => {
    const postData = `<?xml version="1.0" encoding="UTF-8"?>
    <ns0:MM_VEND_GOODRECP_REQ xmlns:ns0="http://pooja_vendor_goodrecp_det.com">
       <VENDOR_ID>SA1000</VENDOR_ID>
    </ns0:MM_VEND_GOODRECP_REQ>`;
    var options = {
        url: 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/poo/vendgoodrecp',
        headers: {
            'Content-Type': 'application/xml',
            'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ=='
        },
        body: postData
    }
    request.post(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            let json = JSON.parse(response.body);
            json = json['HEADER_TABLE'];
            res.send(json);
            console.log(json);
            var time = new Date();
            console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
        } else {
            console.log("error")
        }
    })
})
app.post('/goods/ITEM_TABLE', (req, res) => {
    const postData = `<?xml version="1.0" encoding="UTF-8"?>
    <ns0:MM_VEND_GOODRECP_REQ xmlns:ns0="http://pooja_vendor_goodrecp_det.com">
       <VENDOR_ID>SA1000</VENDOR_ID>
    </ns0:MM_VEND_GOODRECP_REQ>`;
    var options = {
        url: 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/poo/vendgoodrecp',
        headers: {
            'Content-Type': 'application/xml',
            'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ=='
        },
        body: postData
    }
    request.post(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            let json = JSON.parse(response.body);
            json = json['ITEM_TABLE'];
            res.send(json);
            console.log(json);
            var time = new Date();
            console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
        } else {
            console.log("error")
        }
    })
})


//purchase order
app.post('/purchase/HEADER_TABLE', (req, res) => {
    const postData = `<?xml version="1.0" encoding="UTF-8"?>
    <ns0:MT_VEND_PURCHORD_REQ xmlns:ns0="http://pooja_vendor_purchord.com">
    <VENDOR_ID>SA1000</VENDOR_ID>
    </ns0:MT_VEND_PURCHORD_REQ>`;
    var options = {
        url: 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/poo/vendpurchord',
        headers: {
            'Content-Type': 'application/xml',
            'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ=='
        },
        body: postData
    }
    request.post(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            let json = JSON.parse(response.body);
            json = json['HEADER_TABLE'];
            res.send(json);
            console.log(json);
            var time = new Date();
            console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
        } else {
            console.log("error")
        }
    })
})
app.post('/purchase/ITEM_TABLE', (req, res) => {
    const postData = `<?xml version="1.0" encoding="UTF-8"?>
    <ns0:MT_VEND_PURCHORD_REQ xmlns:ns0="http://pooja_vendor_purchord.com">
    <VENDOR_ID>SA1000</VENDOR_ID>
    </ns0:MT_VEND_PURCHORD_REQ>`;
    var options = {
        url: 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/poo/vendpurchord',
        headers: {
            'Content-Type': 'application/xml',
            'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ=='
        },
        body: postData
    }
    request.post(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            let json = JSON.parse(response.body);
            json = json['ITEM_TABLE'];
            res.send(json);
            console.log(json);
            var time = new Date();
            console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
        } else {
            console.log("error")
        }
    })
})


app.listen(3000, () => {
    console.log("server is running on port 3000");
})
