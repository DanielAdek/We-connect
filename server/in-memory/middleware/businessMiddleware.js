import businesses from './../dummydb/usersdb';

export default class BusinessMiddleware {

     /**
     * 
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    static searchByquery(req, res, next) {
        const { location, category } = req.query;
        if (!location && !category) {
            return next();
        }

        const data_location = [];
        const data_category = [];

        for (let biz of businesses) {
            if (biz.location === location) {
                data_location.push(biz);
            }
            if (biz.category === category) {
                data_category.push(biz);
            }
        }
        if (data_location.length < 1 && data_category.length < 1) {
            return res.status(404).json({message:'No businesses found at your specification'});
        }
        return res.status(200).json({
            business: [...data_location, ...data_category]
        })

        
    }
}