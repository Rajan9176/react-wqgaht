import React from 'react';
import '../css/webpage.css';
function Webpage() {
  return (
    <div>
      <div id="topbar"></div>
      <div id="contaniner">
        <div id="header">
          <img src="company.jpg" alt="compan" />
          <ul>
            <li>
              {' '}
              <a href="IMG_20221016_202614.jpg">Home</a>
            </li>
            <li>
              {' '}
              <a href="#">About</a>
            </li>
            <li>
              {' '}
              <a href="#">Service</a>
            </li>
            <li>
              {' '}
              <a href="#">Galary</a>
            </li>
            <li>
              {' '}
              <a href="#">Profile</a>
            </li>
            <li>
              {' '}
              <a href="">Contct us</a>
            </li>
          </ul>
        </div>
        <div id="banner">
          <img src="apple1.jpg" alt="apple1" />
        </div>
        <div id="content1">
          <h4 class="heading">Welcome !</h4>
          <p class="para">
            An apple is an edible fruit produced by an apple tree (Malus
            domestica). Apple trees are cultivated worldwide and are the most
            widely grown species in the genus Malus. The tree originated in
            Central Asia, where its wild ancestor, Malus sieversii, is still
            found today.
          </p>
          <a href="#" class="more1">
            Read More...
          </a>
        </div>
        <div id="content2">
          <h4 class="heading">Our Service!</h4>
          <p class="para">
            An apple is an edible fruit produced by an apple tree (Malus
            domestica). Apple trees are cultivated worldwide and are the most
            widely grown species in the genus Malus. The tree originated in
            Central Asia, where its wild ancestor, Malus sieversii, is still
            found today.
          </p>
          <a href="#" class="more2">
            Read More...
          </a>
        </div>
        <div id="content3">
          <h4 class="heading">About us !</h4>
          <p class="para">
            An apple is an edible fruit produced by an apple tree (Malus
            domestica). Apple trees are cultivated worldwide and are the most
            widely grown species in the genus Malus. The tree originated in
            Central Asia, where its wild ancestor, Malus sieversii, is still
            found today.
          </p>
          <a href="#" class="more3">
            Read More...
          </a>
        </div>

        <div id="bottom1">
          <h2>My Sample Project</h2>
          <p>
            {' '}
            <b>
              An apple is an edible fruit produced by an apple tree (Malus
              domestica).
            </b>
            Apple trees are cultivated worldwide and are the most widely grown
            species in the genus Malus. The tree originated in Central Asia,
            where its wild ancestor, Malus sieversii, is still found today.
          </p>

          <h2>My Sample Project</h2>
          <p>
            <b>
              {' '}
              An apple is an edible fruit produced by an apple tree (Malus
              domestica).{' '}
            </b>
            Apple trees are cultivated worldwide and are the most widely grown
            species in the genus Malus. The tree originated in Central Asia,
            where its wild ancestor, Malus sieversii, is still found today.
          </p>

          <h2>My Sample Project</h2>
          <p>
            <b>
              {' '}
              An apple is an edible fruit produced by an apple tree (Malus
              domestica).{' '}
            </b>
            Apple trees are cultivated worldwide and are the most widely grown
            species in the genus Malus. The tree originated in Central Asia,
            where its wild ancestor, Malus sieversii, is still found today.
          </p>
          <a href="#" class="aa">
            Read More...
          </a>
        </div>
        <div id="bottom2">
          <img src="tab.jpg" alt="tab" />
          <h2>Details:</h2>
          <li>
            <h3>Safe And Security</h3>
          </li>
          <li>
            <h3>Good Quality</h3>
          </li>
          <li>
            {' '}
            <h3>1 Year Waranty</h3>
          </li>
          <li>
            {' '}
            <h3>Charger Cable </h3>
          </li>
          <li>
            {' '}
            <h3>HeadSet</h3>
          </li>
          <li>
            {' '}
            <h3>5000 mAh Battary </h3>
          </li>
        </div>
      </div>
      <div id="footer">
        <ul>
          <li>
            {' '}
            <a href="#">Home</a>
          </li>
          <li>
            {' '}
            <a href="#">About</a>
          </li>
          <li>
            {' '}
            <a href="#">Service</a>
          </li>
          <li>
            {' '}
            <a href="#">Galary</a>
          </li>
          <li>
            {' '}
            <a href="#">Profile</a>
          </li>
          <li>
            {' '}
            <a href="#">Contct us</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Webpage;
