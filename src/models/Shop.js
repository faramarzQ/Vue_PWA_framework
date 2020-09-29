import {Model} from 'vue-mc'

/**
 * Task model
 */
class Shop extends Model {

    // Default attributes that define the "empty" state.
    defaults() {
        return {
            id:   null,
            name: '',
        }
    }

    // Attribute mutations.
    mutations() {
        return {
            id:   (id) => Number(id) || null,
            name: String,
        }
    }

    // Attribute validation
    validation() {
        return {
            id:   integer.and(min(1)).or(equal(null)),
            name: string.and(required),
        }
    }
}

export default Shop
