import router from './route';
import { Passage } from '../controllers';

const baseUrl = '/passages';

router.get(baseUrl, Passage.get);
router.get(`${baseUrl}/:id`, Passage.getOne);
router.post(baseUrl, Passage.add);

export default router;