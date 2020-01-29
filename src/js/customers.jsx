import React, { Component } from "react";
import cncMachine from "../assets/cncMachine.jpg";

class Customers extends Component {
    render() {
        return (
            <div>
                <img className="image-main" src={cncMachine}></img>
                <h3 className="testimonials-text">Customer Success Stories</h3>
                <hr className="line-break"/>
                <div className="testimonials">
                    <p>"Shred all toilet paper and spread around the house good now the other hand,
                        too tuxedo cats always looking dapper i cry and cry and cry unless you pet me, a
                        nd then maybe i cry just for fun shred all toilet paper and spread around the house.
                        Stinky cat do not try to mix old food with new one to fool me!
                        mewl for food at 4am swat at dog."
                    </p>
                </div>
                <div className="testimonials">
                    <p>"Slap owner's face at 5am until human fills food dish a nice warm laptop for me to
                          sit on but meowing chowing and wowing for experiences short bursts of poo-phoria
                          after going to the loo meow for food, then when human fills food dish, take a
                          few bites of food and continue meowing and pelt around the house and up and down
                          stairs chasing phantoms and hunt by meowing loudly at 5am next to human slave food dispenser."
                    </p>
                </div>
                <div className="testimonials">
                    <p>"A nice warm laptop for me to sit on you have cat to be kitten me right meow for flee in
                           terror at cucumber discovered on floor skid on floor, crash into wall attempt to leap
                           between furniture but woefully miscalibrate and bellyflop onto the floor; what's your
                           problem? i meant to do that now i shall wash myself intently so thug cat meow."                    
                    </p>
                </div>
            </div>
        )
    }
}


export default Customers;