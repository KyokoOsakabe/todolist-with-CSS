'use strict';
{
    const today = new Date();
    document.querySelector('h2').textContent = today.toLocaleString('en-US', { month: 'long' }) + ` ${today.getDate()}th, ${today.getFullYear()}`
    // `- ${today.getFullYear()}.${today.getMonth() + 1}.${today.getDate()} -`;
}

{
    document.getElementById('button').addEventListener('click', () => {

        const li = document.createElement('li');
        const text = document.querySelector('input');
        li.textContent = text.value;
        const ul = document.querySelector('ul')
        ul.appendChild(li);

        text.value = '';
        text.focus();

        document.querySelector('.delete').addEventListener('click', () => {
            ul.removeChild(li);
        });
    })

    document.querySelector('ul').addEventListener('click', e => {
        if (e.target.nodeName === 'LI') {
            e.target.classList.toggle('done');
        }
    });


}







