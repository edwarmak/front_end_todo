// console.log($);
console.log('modal practice app.js is linked to this index.html');

$(() => {
    const $openBtn = $('#openBtn')
    const $dropdown = $('#dropdown')
    const $closeBtn = $('#close')

    const openDropdown = () => {
        $dropdown.css('display', 'block')
        // $modal.show()
    }

    const closeDropdown  = () => {
        $dropdown.css('display','none')
        // $modal.hide()
    }

    $openBtn.on('click', openDropdown)
    $closeBtn.on('click', closeDropdown)

    setTimeout(closeDropdown, 5000)
})
