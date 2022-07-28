const AWS = require('aws-sdk');
const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

AWS.config.update({
  accessKeyId: 'AKIAQLRACMVXCTMTMPVP',
  secretAccessKey: '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',
  region: 'us-east-1',
});

USERPOOLID = 'us-east-1_hoW9lzr5D';

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const addUser = async (details) => {
  try {
    const COGNITO_CLIENT = new AWS.CognitoIdentityServiceProvider({
      region: 'us-east-1',
    });

    var poolData = {
      UserPoolId: USERPOOLID,
      Username: details.username,
      DesiredDeliveryMediums: ['EMAIL'],
      TemporaryPassword: details.password,
      UserAttributes: [
        {
          Name: 'email',
          Value: details.emailid,
        },
        {
          Name: 'email_verified',
          Value: 'true',
        },
      ],
    };
    await COGNITO_CLIENT.adminCreateUser(poolData, (error, data) => {
      console.log(error);
      console.log(data);
      return data;
    });
  } catch (err) {
    console.log(err);
    return {};
  }
};

const Resetpassword = async (details) => {
    try {
        const COGNITO_CLIENT = new AWS.CognitoIdentityServiceProvider({
          region: 'us-east-1',
        });
    
        var poolData = {
          ClientId: "4o3bvk9frht77c14i16em8rq09",
          Username: details.username,
        };
        await COGNITO_CLIENT.forgotPassword(poolData, (error, data) => {
          console.log(error);
          console.log(data);
          return data;
        });
      } catch (err) {
        console.log(err);
        return {};
      }
};


app.post('/auth/signup', async (req, res) => {
  console.log('into signn');
  try {
    console.log(req.body);
    const data = await addUser(req.body);
    res.status(200).json({
      message: 'success',
      ...data,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: err.message ?? JSON.stringify(err),
    });
  }
});

app.post('/auth/Resetpassword', async (req, res) => {
  try {
    console.log(req.message);
    const data = Resetpassword(req.body);
    res.status(200).json({
      message: 'success',
      ...data,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: err.message ?? JSON.stringify(err),
    });
  }
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});