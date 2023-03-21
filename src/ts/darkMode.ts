/**
 * Get the state of the dark mode
 * @returns {boolean} true if dark mode is enabled, false otherwise
 */
export function getState() {
    let state = localStorage.getItem('darkMode')
    if (state != null) {
        localStorage.setItem('darkMode', "true")
        return true;
    }

    return Boolean(state);
}

/**
 * Set the state of the dark mode
 * @param {boolean} state true if dark mode is enabled, false otherwise
 * @returns {void}
 * @throws {Error} if the state is not a boolean
 * @throws {Error} if the state is null
 */
export function setState(state: boolean) {
    if (state == null) {
        throw new Error('State cannot be null')
    }

    if (typeof state !== 'boolean') {
        throw new Error('State must be a boolean')
    }

    localStorage.setItem('darkMode', state.toString())
}

/**
 * Toggle the state of the dark mode
 * @returns {void}
 */
export function toggleState() {
    let state = getState()
    setState(!state)
}

const darkMode = {
    getState,
    setState,
    toggleState
}

export default darkMode;