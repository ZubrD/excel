export class TableSelection {
    constructor() {
        this.group = []
        this.current = []
    }

    select($el) {
        this.clear()
        this.current = $el
        this.group.push($el)
        $el.focus().addClass('selected')
    }

    clear() {
        this.group.forEach(el=> {
            el.removeClass('selected')
        })
    }

    selectGroup($group = []) {
        this.clear()
        this.group = $group
        this.group.forEach($el => $el.addClass('selected'))
    }
}