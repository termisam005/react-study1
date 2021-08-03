import React from 'react';
import '../App.scss';

function NatoinBar() {
    return (
        <section className="blue_line">
            <article className="nation_bar">
                <p className="call">London</p>
                <div className="time">10:24</div>
            </article>
            <article className="nation_bar">
                <p className="call">London</p>
                <div className="time">10:24</div>
            </article>
            <article className="nation_bar">
                <p className="call">London</p>
                <div className="time">10:24</div>
            </article>
            <article className="nation_bar">
                <p className="call">London</p>
                <div className="time">10:24</div>
            </article>
            <article className="nation_bar">
                <p className="call">London</p>
                <div className="time">10:24</div>
            </article>
        </section>
    );
}

/*const currentMenu;
const menu = document.querySelector('.nation_bar');

function clickHandler(e) {
    if (currentMenu) {
        currentMenu.classList.remove('nation_bar_on');
    }
    e.target.classList.add('nation_bar_on');
    currentMenu = e.target;
}
menu.addEventListener('click', clickHandler);*/


//const Button = (props) => <button className={"button"} {...props} />;

export default NatoinBar;