import passportJwt from '../passport'


export const authenticate = (req, res, next) => {
  passportJwt.authenticate('jwt', { session: false }, (err, user, info) => {
    // console.log(req, user, "@debug")
    if (err) return next(err)
    if (!user) throw Error('Invalid token, please log in or sign up')
    req.user = user
    return next()
  })(req, res, next)
}
