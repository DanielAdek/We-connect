import businesses from './../dummydb/usersdb';

export default class BusinessMiddleware {

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    static searchByquery(req, res, next) {
        const { location } = req.query;
        if (!location) {
            return next();
        }

        const data_location = [];

        for (let biz of businesses) {
            if (biz.location === location) {
                data_location.push(biz);
            }
            
        }
        if (data_location.length < 1) {
            return res.status(404).send('No businesses found at your specification');
        }
        return res.status(200).json({
            business: [...data_location]
        })
    }
}