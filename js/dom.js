document.getElementById('apply-bg').addEventListener('click', function(){
    // console.log('apply bg')
    const friends = document.getElementsByClassName('friend');
    for(const friend of friends){
        friend.style.background = 'lightblue'
    }
    
});

document.getElementById('center-third').addEventListener('click', function(){
    // console.log('center')
    const third = document.getElementById('third-friend');
    third.style.textAlign = 'center';
});

document.getElementById('add-friend').addEventListener('click', function(){
    // console.log('clicked')
    const friendContainer = document.getElementById('friends');
    const friend = document.createElement('div');
    friend.classList.add('friend');
    friend.innerHTML = `
    <h3 class="friend-name">New Friend</h3>
    <p>Something Add NewFriend</p>
    `;
    friendContainer.appendChild(friend);
})