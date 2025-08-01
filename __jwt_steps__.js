/**
 * JWT: secure your api
 * ----------------------------
 *          CREATE TOKEN
 * ----------------------------
 * 1. Clinet: after user login send user basic info to create token
 * 
 * 2. in the server side: install npm i jsonwebtoken
 * 3. import jsonwebtoken
 * 4. jwt.sign(payload, secret, {expires})
 * 5. return token to the client side
 * 6. after receiving the token store it either http only cookies or localstorage(second best solution)
 * 7. use a general space onAuthStateChange > AuthProvider
 * 
 * ----------------------------
        * SENT SERVER TOKEN 
 * ----------------------------
 * 
 * 1. for sensitive api call () send authorization headers
 *  { authorization: 'Bearer token' }
 * 
 * -----------------------------
 *      VERIFY TOKEN
 * -----------------------------
 * 
 * 1. Create a function Called veriftyJWT (middleware)
 * 2. this function will have three param: req, res, next
 * 3. First check whether the authorization headers exists
 * 4. if not send 401
 * 5. get the token out of the authorizaiton header 
 * 6. call jwt.verify(token, secret, (err, decoded))
 * 7. if err => send 401
 * 8. set decoded to the req object so that we can retrive it later
 * 9. call the next() to go to the next function
 * 
 * -----------------------------
 * 
 * 1. check wether token has the email that matches with the request email
 * 
 */