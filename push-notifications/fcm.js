var FCM = require('fcm-node');
var serverKey = 'AAAAiB5Pr0A:APA91bGX-Zuflr-hrR3s7D-DwxkLqzntYt3Gf3-qrRz3DI1ab4tSXVg0fhajXGDdkTUOGlLaS-pYeUdaU-SssX74tZuqsdLMUitOE1_R0_76uujE2vKHjNBWsbZtZ-jbRMma07ELW8V_';
var fcm = new FCM(serverKey);

var message = {
    // to: 'eDSMT5D8nectsOstgRLs3p:APA91bEVHVLCtAvdHrDqIgm737M_7SJVOkOvD9HX5a_Vh4PYRkJqbJsknuuuC1BEBz4mY3KQERPtFc3AkYT1G_X5nr5rZPVbx2raKa3BskrWSEYES_y4Co6ut3w5exGDOvjQF6k_Aw2q',
    // to: 'dwrNP96voG0yrqz8LeQxkG:APA91bG1c6lbgt-cKfFGJ3g2kPTIY4xlkmb29zy2NX8S7M48WiuvuQ_uXcTG6Dni-cwIwJvKJ5SOjdCfuBUS75xcl6Fgbqkkrfaxp7JR2azM1eOtaTrE3GEOaxRBFLvOII45R_R7b_JH',
    // to: 'fVnLh4y81sh0Q4DQDFYMs2:APA91bF-GwGQyDxfdzcu4syAGnCnjE-VSsqLS7t_5oIEY9tl6YZ0b6jG4yLFrzdTokBRTGRU2AqDMtZ4O7Nx1RaxILVfPKFse1xz0Xd910t6s-6cOWXZby6f-VRhcy1oC06nTOqFGJvt',
    // to: 'eJ9NXwHew6txu3-Q1zwUIh:APA91bF_4GSAHg0Aj_f1LFUQkHdIFuowL40bf4D_E03OwHHgkubwEt5KNJfJjU3B2SBkCkD9SNQDQeV1T95E9KngISm4P2xuFmv9y31inl5dUcSum18XrrEdtta60CC_rRNE_9_RVAab',
    // to: 'dwcO0qOVxvWlcSvN2qtg0E:APA91bGG_711GyW6vXRBWJKcdAZd25hbuF6THRa4XiKYyfMVOaj8yv2PCvlNRc4CT63eImHKmgs5wgCknIrzZi-4e3hK3UWazg8-XrqHGxtcPAvkF7qdDfYnZ8Ik-LpuV_Roykh91E3V',
    // to: 'ctWRvCg6yRxOUlNHPbDKIX:APA91bGNQXu4hSTyO3mzF4Z6ziZll8OI1DhxG4FeAVvNb1vOokG9dXQOMSOy_aIAPBR4iPvgCRZ_TZpORxdNWlvc7SW29Vv67nGUkaW0_ewxy2DlDbQ69dHa_zaIsUsddhUJmb1sBXz1',
    to: 'cc6qb2LQDJnBVgKD-BhRUX:APA91bF6hgLvAYUH5Z9FskvDfrVzNyiu9wASftKRkt6xwqlv7VtyRBW9SQbWU2bNiIqrUr7SLUd3Jb74sLObhhaMqdMZNu96tTEE0Ij66Pw2TpbLXTXFL_zeyUkkSkeadHZpsSGa5EG-',
    notification: {
        title: 'Family Alert',
        body: "Your family member seems to be infected from Covid-19 based on its symptoms. Contact your doctor for more details.",
        // image: 'https://www.example.com/image.png'
    }
};

fcm.send(message, function (err, response) {
    if (err) {
        console.log("Something has gone wrong!" + err);
        console.log("Response:! " + response);
    } else {
        // showToast("Successfully sent with response");
        console.log("Successfully sent with response: ", response);
    }
});
