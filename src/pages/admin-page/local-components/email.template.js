const articleTemplate = `<tr>
                        <td style="text-align: center;">
                            <p style="font-size: 20px;
                                    margin: 50px 0;
                                    padding: 0;
                                    font-family: Arial, Helvetica, sans-serif;                
                                    font-weight: 300;
                                    text-align: center;">
                                {{##EMAIL_ARTICLE##}}
                            </p>
                        </td>
                    </tr>`

const imageTemplate = `<tr>
                        <td style="text-align: center;">
                            <p style="font-size: 20px;
                                    margin: auto;
                                    padding: 0;
                                    font-family: Arial, Helvetica, sans-serif;                
                                    font-weight: 300;
                                    text-align: center;
                                    background: url('{{##EMAIL_IMAGE##}}');
                                    background-repeat: no-repeat;
                                    background-size: contain;
                                    height: 200px;
                                    width: 300px;
                                    ">
                            </p>
                        </td>
                    </tr>`

const emailTemplate = `<div style="background-color: #E9EEF4; padding: 30px 30px 30px 30px; text-align: center;">
                <table style="width: 700px; text-align: center; background-color: white; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); padding: 30px 30px 30px 30px;">
                    <tr style="height: 80px;">
                        <td style="text-align: center;">
                            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.707031" y="0.0639648" width="55" height="55" rx="8" fill="#002654"/>
                                <path d="M28.207 6.01025L34.0285 21.7425L49.7607 27.564L34.0285 33.3854L28.207 49.1177L22.3856 33.3854L6.65332 27.564L22.3856 21.7425L28.207 6.01025Z" fill="white"/>
                            </svg>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: center;">
                            <h1 style="font-size: 36px;
                                    color: #002654;
                                    font-family: Verdana, Geneva, sans-serif;
                                    margin: 0;
                                    padding: 0;
                                    margin-bottom: 15px;
                                    text-align: center;" >
                                {{##EMAIL_TITLE##}}
                            </h1>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: center;">
                            <p style="font-size: 20px;
                                    font-family: Arial, Helvetica, sans-serif;                
                                    font-weight: 300;
                                    margin: 0;
                                    padding: 0;
                                    text-align: center;" >
                                {{##EMAIL_TAGLINE##}}
                            </p>
                        </td>
                    </tr>
                    {{##EMAIL_CONTENT##}}
                    <tr>
                        <td style="text-align: center;">
                            <p  style="font-size: 20px;
                                    margin: 0;
                                    padding: 0;
                                    font-family: Arial, Helvetica, sans-serif;                
                                    font-weight: 300;
                                    margin: 0;
                                    color: #0F182B80;
                                    margin-top: 32px;
                                    text-align: center;" >
                                This email was sent to {{##USER_EMAIL##}}
                            </p>
                        </td>
                    </tr>
                </table>        
            </div>`

export {
    articleTemplate,
    imageTemplate,
    emailTemplate
}