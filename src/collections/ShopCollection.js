import {Collection} from 'vue-mc'
import User from '../models/User'

class ShopCollection extends Collection {

    // Model that is contained in this collection.
    model() {
        return User;
    }

    // Default attributes
    defaults() {
        return {
            orderBy: 'name',
        }
    }

    // Route configuration
    routes() {
        return {
            fetch: '/tasks',
        }
    }

    // Number of tasks to be completed.
    get todo() {
        return this.sum('done');
    }

    // Will be `true` if all tasks have been completed.
    get done() {
        return this.todo == 0;
    }
}

export default ShopCollection
