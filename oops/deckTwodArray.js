/*****************************************************************************************
 * @purpose :  Write a Program DeckOfCards,to initialize deck of cards having suit ("Clubs", "Diamonds", "Hearts", "Spades") 
               Rank ("2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"). 
 * @file    :  deckTwodArray.js
 * @overview:  shuffle the cards using Random method and then distribute 9 Cards to 4 Players 
               Print the Cards the received by the 4 Players using 2D Array…
 * @author  :  surendra 
 * @version :  1.0
 * @since   :  04/01/2019 
 **************************************************************************/
var utility = require('../oops/utilityForOoops');
/**
 * accessing the util
 */
function deck() {
  /**
   * accessing the deck2D from util
   */
  utility.deck2D();
}
deck();