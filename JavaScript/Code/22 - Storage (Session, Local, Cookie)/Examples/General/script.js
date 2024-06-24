// General

(function storage() {

    localStorage.setItem('user', 'Anja Đurđević');
    const user = localStorage.getItem('user');

    document.getElementById('user').innerHTML = user;

    sessionStorage.setItem('session', crypto.randomUUID());

    localStorage.setItem('age', 27);

    // localStorage.clear();
})();

(function cookies (){

    document.cookie = 'username=Anja Đurđević;expires=Thu, 31 Dec 2024 12:00:00 UTC;path=/;Secure';
    console.timeLog('Cookie is ' + document.cookie);

})();