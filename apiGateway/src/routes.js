const Router = require('express');

const SessionsController = require('./controllers/SessionsController');
const UserController = require('./controllers/UserController');
const PurchaseController = require('./controllers/PurchaseController');

const router = Router();

const authMiddleware = require('./middlewares/auth');

router.get('/users/:id', UserController.show);
router.post('/users', UserController.store);
router.post('/sessions', SessionsController.store);

router.use(authMiddleware);

router.get('/purchases', PurchaseController.index);
router.get('/purchases/:id', PurchaseController.show);
router.post('/purchases', PurchaseController.store);

module.exports = router;