export type Trait = 'valor' | 'honor' | 'oath' | 'justice' | 'loyalty' | 'mercy';

export interface AnswerOption {
  text: string;
  score: number;
}

export interface Question {
  id: string;
  trait: Trait;
  /** Long-form scenario / vignette */
  text: string;
  /** Short explicit question line shown above choices (optional; UI falls back if omitted) */
  prompt?: string;
  options: AnswerOption[];
}

export const questions: Question[] = [
  {
    id: 'mercy-1',
    trait: 'mercy',
    text: `After an incredibly brutal siege defense, you lead your troops to clear the battlefield. Your forces have suffered heavy casualties, and the accompanying monks' supply of clean linen rolls and wine used to clean wounds is severely depleted. At this moment, soldiers discover several severely wounded enemy troops in a hidden cellar. These enemies brutally killed several of your comrades yesterday, and your soldiers are filled with righteous indignation. These few wounded soldiers are now agonizingly begging you for some water to drink.`,
    options: [
      { text: `Refuse to waste any supplies. Order them to be locked in immediately and left to fend for themselves. As a commander, my primary duty is to ensure the survival of our own wounded. Wasting precious supplies on enemies whose hands are stained with the blood of our brothers is a betrayal of our soldiers.`, score: 1 },
      { text: `Stop your subordinates' lynching and tie them up as prisoners of war. Provide no additional medical treatment other than dirty water to maintain minimal vital signs. Those who survive can be used later to exchange for ransom or intelligence; if they die, it is their fate.`, score: 2 },
      { text: `Share a small amount of water from your personal rations with them, but do not allow the use of military supplies. Although they are enemies, as a knight, you cannot turn a blind eye to those who have lost the ability to resist. You do your best to provide basic humanity on a personal level.`, score: 3 },
      { text: `Defying the angry and puzzled gazes of your soldiers, you order the accompanying priest to bandage them without discrimination. You know this will severely shake military morale and even trigger a mutiny, but before the gods, the wounded are no longer enemies, and pure salvation is above all factions and hatred.`, score: 4 },
    ],
  },
  {
    id: 'mercy-2',
    trait: 'mercy',
    text: `Winter is coming, and you are ordered to lead a team to escort the last batch of winter rye back to the lord's fortress. The garrison in the fortress has been eating boiled leather boots with tree bark for a whole month. If this grain is not delivered, the defense line will collapse from starvation. Passing through a scorched wasteland that once belonged to the enemy country, a group of ragged, emaciated refugees (mostly old, weak, women, and children) block the convoy. They kneel in the freezing muddy water, begging you to give them even a small bag of wheat, otherwise they will absolutely not survive tonight's blizzard.`,
    options: [
      { text: `Draw your sword and warn them to step back. Anyone who dares to approach the grain carts will be killed on the spot. As a landed knight, ensuring the fortress defense line is not breached and taking responsibility for the oath to the lord is the highest mission. Distributing military supplies that can determine the outcome of the war to irrelevant refugees is a betrayal of the thousands of comrades behind the defense line.`, score: 1 },
      { text: `Order the soldiers to set up spears to forcefully disperse the crowd, whip the draft horses pulling the carts, and charge forward at full speed. You deeply understand the strategic value of this grain and will absolutely not give away a single grain of wheat. As for the life or death of these refugees, that is caused by the incompetence of the defeated country's lord. In this cruel winter, you can only take care of your own people first.`, score: 2 },
      { text: `Strictly order the soldiers to guard the grain carts to the death, absolutely forbidding anyone from touching the military supplies. But you silently untie your personal dry ration bag from your saddle, throw it to them, and loudly shout at the troops to keep moving. You try your best to preserve your personal moral baseline, but you know this little food can't save many people.`, score: 3 },
      { text: `Ignoring your adjutant's drawn sword and the soldiers' angry protests, you forcefully order a grain cart to be split open, spilling enough rye in the snow for them to survive the blizzard. You know very well that this act of disobeying military orders will send you to the gallows as soon as you return to the fortress, but you cannot turn your back when looking at those freezing children.`, score: 4 },
    ],
  },
  {
    id: 'mercy-3',
    trait: 'mercy',
    text: `Three months ago, your most trusted squire leaked your patrol route to a rival family for a few gold coins, leading your squad into an ambush where three veterans died tragically. Today, this squire was caught by your scouts. He broke his legs during the escape, and his wounds are festering. He is now groveling like mud before your horse's hooves. Crying and kissing your stirrups, he speaks of his momentary madness and only begs you to give him a quick death, for the sake of your five years of master-servant relationship. The soldiers behind you are drawing their flaying knives, demanding the most cruel execution to comfort their dead brothers.`,
    options: [
      { text: `Coldly kick him away and hand him over to your subordinates. As a commander, your primary duty is to maintain the iron discipline of the army and pacify the morale of the living. Blood debts must be paid with the most agonizing wails. This is not only an answer to the dead but also the most effective deterrent for the entire army.`, score: 1 },
      { text: `Stop the soldiers' private lynching. After reading the lord's law, order him to be hanged with a thick hemp rope on the spot. You disdain to torture a dying man, but the crime of defection is unforgivable, and the gallows is his well-deserved destination.`, score: 2 },
      { text: `Ignoring the dissatisfied grumbles of your subordinates, you personally draw your sword and behead him with one strike. You give him a knight-level decent death (beheading), sparing him the pain of abuse and suffocation, and silently pray for this fallen soul in your heart.`, score: 3 },
      { text: `Send the guards away late at night, throw him a bag of herbs and a blind old horse, and tell him to roll as far away as possible in the dark. You know that tomorrow morning you will face mutinous soldiers and severe punishment from the commander, and your prestige will be swept away, but you still cannot bring yourself to personally kill this boy who once polished your armor.`, score: 4 },
    ],
  },
  {
    id: 'mercy-4',
    trait: 'mercy',
    text: `The Black Death has swept the border, and the lord has issued a death order: seal off the infected villages ahead; anyone who dares to cross the river half a step will be killed without mercy. You are leading archers guarding the opposite bank of the river. At this moment, a mother covered in black spots and about to die of illness, holding a seemingly uninfected baby, wades into the freezing river water, desperately begging you to catch this child and leave a trace of bloodline for her family.`,
    options: [
      { text: `Without hesitation, order to fire arrows and shoot her dead in the middle of the river. Even if the baby looks healthy, it might carry the deadly miasma. Your duty is to protect the tens of thousands of citizens in the cities behind you, and you absolutely cannot let the entire fief turn into a living hell because of momentary womanly benevolence.`, score: 1 },
      { text: `Order the spearmen to form a formation on the shore. If she dares to approach, use the spear shafts to forcefully push her back into the deep water. You don't want to waste expensive arrows, nor do you want to dirty your own hands. If the mother and son drown in the river, it is God's will; you are just executing the quarantine order.`, score: 2 },
      { text: `Sternly shout her back, absolutely forbidding her to approach the shore. But you have someone use a long pole to pass over a piece of clean dry food and a few thick linen clothes. You are powerless against the lord's blockade order and can only give a little insignificant supplies in exchange for a moment of peace for your conscience.`, score: 3 },
      { text: `Drop your weapons, personally wade into the bone-chilling river to receive that baby. You fully understand that you may have already been infected with the deadly Black Death, that you will be stripped of your knighthood, and that you will be permanently isolated in the wilderness by your own subordinates to wait for death along with this baby, but you cannot watch a life extinguish before your eyes.`, score: 4 },
    ],
  },
  {
    id: 'mercy-5',
    trait: 'mercy',
    text: `The Church's Inquisition has arrived in your territory. A deaf-mute village girl who often uses herbs to treat the poor has been falsely accused of being a witch using sorcery because she failed to cure the bishop's nephew's fever. She is about to be tied to the stake and burned alive. Fanatical believers are cheering. The bishop demands that you, as the local lord knight, personally raise the torch to ignite the pyre to prove your piety to the gods. The village girl cannot speak and can only stare at you with eyes full of fear and despair.`,
    options: [
      { text: `Expressionlessly take the torch and ignite the pyre without hesitation. Opposing the church means you will be excommunicated, and your family will lose its legitimacy. The life or death of a village girl is insignificant in the face of the political stability and power balance of the territory.`, score: 1 },
      { text: `Turn around and order your squire to light the fire in your place, using the excuse that your armor is too heavy to step forward. You are unwilling to personally bear the guilt of burning an innocent person to death, but you will absolutely not offend the bishop for a lower-class commoner. Going with the flow is the best philosophy of self-preservation.`, score: 2 },
      { text: `Take the torch and walk towards the pyre. The moment you light the fire, you secretly stuff a small bag of gunpowder or highly flammable pine resin under her feet. You are powerless to stop the church's sentence and can only use this hidden method to let her be instantly engulfed by the flames, sparing her the pain of prolonged burning.`, score: 3 },
      { text: `Publicly break the torch and throw it at the bishop's feet, draw your sword, and cut the ropes binding the village girl. You know this action will immediately invite a crusade, your castle will be razed to the ground, and you and your family will be wanted all over Europe, but your knightly code absolutely forbids you from raising a butcher's knife against an unarmed, innocent person.`, score: 4 },
    ],
  },
  {
    id: 'mercy-6',
    trait: 'mercy',
    text: `After a fierce border clash, the enemy troops retreated. On the muddy battlefield, a purebred Andalusian warhorse belonging to an enemy heavy knight had its hind legs broken by an overturned supply cart. This kind of warhorse is invaluable, but right now its bones are shattered, and it is letting out bloodcurdling screams. Your soldiers have been hungry for a long time and are staring at this plump warhorse with green eyes, suggesting to slaughter it immediately so the whole army can have a horse meat stew tonight.`,
    options: [
      { text: `Nod in agreement with the soldiers' suggestion, order it to be slaughtered immediately and cured with coarse salt. In the cruel war, the pain of a beast is not worth mentioning at all. Converting it into the protein and stamina urgently needed by the soldiers is the most rational decision of a commander.`, score: 1 },
      { text: `Ignore the warhorse's wails, order the troops to bypass it and continue marching. You don't want to waste the energy and time of swinging a knife on this enemy livestock, nor do you want to encounter an enemy ambush because of stopping. Letting it slowly bleed to death here is its own fate.`, score: 2 },
      { text: `Loudly shout back the soldiers who want to eat horse meat. You step forward, draw your dagger, and accurately pierce the warhorse's hindbrain, instantly ending its pain. Although you lost a hearty dinner, you cannot bear to watch a noble creature suffer prolonged torture.`, score: 3 },
      { text: `Order the starving, grumbling soldiers to lift the heavy supply cart together, and use the precious herbs in the military doctor's hands to bandage the warhorse's broken leg. You know clearly that this horse is ruined, and doing so will greatly slow down the marching speed and even trigger soldiers' protests, but you cannot turn a blind eye to a pair of crying eyes.`, score: 4 },
    ],
  },
  {
    id: 'mercy-7',
    trait: 'mercy',
    text: `It is the dead of winter, and heavy snow seals the mountains. An orphaned boy of a defeated country, barely ten years old and in rags, secretly sneaked into your camp out of unbearable hunger and stole a small piece of military salted pork. He was caught red-handed by the night patrol guards. According to the military law you personally set down, which also serves to deter the starving refugees around, anyone who steals military supplies must have their right hand publicly chopped off. The boy is pinned against the wooden post, crying and shouting that he has a sister who is about to starve to death.`,
    options: [
      { text: `Personally pull out a short axe, chop off his right hand with one clean strike, and hang it on the perimeter of the camp. Military law is immovable as a mountain. Once you show weakness to a child today, tomorrow the entire camp will be flooded by tens of thousands of desperate refugees. Your ruthlessness is to preserve the survival of the entire army.`, score: 1 },
      { text: `Whip him severely until his skin is torn and flesh gapes, then strip off his only ragged outer coat, kick him out of the camp, and throw him into the snowstorm. You spared him the punishment of losing a hand, but this severe beating is enough to teach him a lesson. As to whether he can survive this winter night, it has nothing to do with you.`, score: 2 },
      { text: `Publicly and severely reprimand the guards for their lax defense, pretend to be disgusted that the boy is too dirty and not worthy of dirtying the torture instruments, and order him to be driven away. In private, you have your personal squire quietly follow him and throw the boy half a piece of hard, dry black bread. You use a clever excuse to maintain the face of military law while also preserving your conscience.`, score: 3 },
      { text: `In front of all the veterans, you push away the executioner, not only pardoning the boy but also taking off your own fur cloak to wrap around him, and give him your own ration. You publicly break the iron rule you set down, letting your subordinate generals whisper about your weakness behind your back, simply because you cannot stand the wails of a child.`, score: 4 },
    ],
  },
  {
    id: 'mercy-8',
    trait: 'mercy',
    text: `For ten years, a baron of a rival family has been burning, killing, and looting on the border. He not only took away half of your fief but also publicly humiliated your father. In today's bloody battle, you finally strike him down from his horse. His longsword is broken, and his helmet rolls away. This once imperious villain is now kneeling in the muddy water, begging for your mercy. Weeping bitterly, he hands over his lord's seal, even kisses your battle boots, and begs you to spare his life so he can go back to see his newborn daughter.`,
    options: [
      { text: `Sneer coldly and pierce his throat with one sword strike. When pulling weeds, one must remove the roots. Letting a venomous snake go back is extremely irresponsible for the family's future. His territory is yours now, and this is his deserved end. The dictionary of a knight does not need mercy for enemies.`, score: 1 },
      { text: `Break two of his ribs and lock him in the dungeon as the lowliest prisoner of war. Strip him of all his territories and dignity until his family goes bankrupt to hand over an astronomical ransom. You don't need to kill him; you want him and his family to spend the rest of their lives in humiliation and poverty.`, score: 2 },
      { text: `Accept his surrender and the territory seal. Although you wish you could tear him to pieces, the knightly rules of engagement require you to accept a decent surrender. You order him into lifelong exile, never to set foot on this land again. You rein in at the edge of hatred.`, score: 3 },
      { text: `Sheathe your longsword and pull him up from the muddy water. You refuse to accept his territory and publicly announce that you forgive all his sins of the past ten years. You risk being seen as a coward by your own people, and the huge risk that this baron will likely tear up the agreement and bite you back tomorrow, just to break the chain of endless revenge.`, score: 4 },
    ],
  },
  {
    id: 'valor-1',
    trait: 'valor',
    text: `The king's trusted count is drunk at a banquet and is pulling out a red-hot iron rod, preparing to blind a maid who accidentally spilled wine. The other nobles present are as quiet as winter cicadas, because offending the count is equivalent to treason.`,
    options: [
      { text: `Lower your eyes and drink. Your family's fief is under the count's control. Provoking the king's mad dog for a lowly maid is extremely stupid political suicide.`, score: 1 },
      { text: `Find an excuse to get up and leave the banquet hall. You are powerless to stop the atrocity, but you are absolutely unwilling to sit there and listen to the maid's screams. Out of sight, out of mind.`, score: 2 },
      { text: `Stand up and loudly use the clause "labor force shall not be arbitrarily damaged" from the lord's codex to dissuade the count, trying to use rules to pacify the incident.`, score: 3 },
      { text: `Flip the table directly, step forward, and punch the count to the ground. You know perfectly well that you will be thrown into the death row dungeon tomorrow, but you will not allow atrocities to happen before your eyes.`, score: 4 },
    ],
  },
  {
    id: 'valor-2',
    trait: 'valor',
    text: `Your remnants are retreating, with a dark mass of enemy heavy cavalry behind you. Ahead is only a narrow wooden bridge. If no one stays behind to defend the bridgehead to the death and delay them, everyone will be crushed by the cavalry on the plains.`,
    options: [
      { text: `Order the mercenaries or felons in the squad to defend the bridge. As a commander, your brain is more valuable than your body. Returning alive to the fortress with the main force is being responsible for the overall situation.`, score: 1 },
      { text: `Order the whole army to accelerate across the bridge, and pour lamp oil on the bridge. Even if a few slow-running soldiers haven't crossed yet, ignite it immediately to burn the bridge.`, score: 2 },
      { text: `Stand at the bridgehead and loudly call for volunteers to stay behind. You fight with them until the moment the enemy approaches, and then retreat across the bridge at the last moment.`, score: 3 },
      { text: `Order all soldiers to cross the bridge immediately, while you draw your greatsword and block the bridgehead alone. Use your single flesh-and-blood body to meet the charge of hundreds of heavy horses.`, score: 4 },
    ],
  },
  {
    id: 'valor-3',
    trait: 'valor',
    text: `A chilling Church Inquisitor arrives at your camp with a squad of heavily armed Crusaders. Presenting a secret decree, he demands to take away your finest Centurion, accusing him of heresy. Defying the Inquisitor will be deemed the same crime.`,
    options: [
      { text: `Personally disarm your Centurion and hand him over. War with the Church means certain death for you and excommunication for all your men. Compromise is the only law of survival.`, score: 1 },
      { text: `Lie and claim the Centurion went out on patrol yesterday. Secretly dispatch a messenger telling him to flee immediately and never return.`, score: 2 },
      { text: `Sternly refuse to hand him over directly. Demand absolute proof from the Inquisitor and declare that you will write to the Bishop to appeal for a 'Trial by Combat,' using bureaucratic delays to buy time.`, score: 3 },
      { text: `Draw your longsword and order all archers in the camp to draw their bows against the Inquisitor. You coldly tell him: if he wants to take your man, he will have to step over your corpse.`, score: 4 },
    ],
  },
  {
    id: 'valor-4',
    trait: 'valor',
    text: `You are scouting in the forest with a young squire and accidentally run into hundreds of the enemy's main vanguard. During the retreat, the squire's horse trips over a tree root, and he falls into a swamp. The enemy pursuers are less than fifty paces away from him.`,
    options: [
      { text: `Squeeze your horse's flanks and flee back to the fortress at full speed. Bringing back intelligence on the enemy's main force can save the whole city. The value of this intelligence far exceeds the life of a squire. You cannot let emotions affect your judgment.`, score: 1 },
      { text: `Stop your horse, shoot an arrow from a safe distance, and directly end the squire's life. This saves him from suffering inhuman torture after falling into enemy hands, and then you quickly evacuate.`, score: 2 },
      { text: `Stop at a safe distance and use a bow and arrow for suppressive fire, trying to block the pursuers' steps. Once the enemy archers start firing back, you have to grit your teeth and retreat.`, score: 3 },
      { text: `Turn your horse around, draw your spear, and launch a reverse charge alone against hundreds of pursuers, trying to buy those insignificant ten seconds for the squire to climb out of the swamp.`, score: 4 },
    ],
  },
  {
    id: 'valor-5',
    trait: 'valor',
    text: `A severe famine ravages the city. Hundreds of maddened commoners, wielding pitchforks and torches, corner an innocent wandering scholar in a dead-end alley, accusing him of bringing a curse and preparing to burn him alive. You only have two guards by your side.`,
    options: [
      { text: `Order your guards to stand down. Inciting a popular revolt for a mere outsider would engulf the entire city in flames. As the protector of the realm, sacrificing a scapegoat to quell the riot is the logical choice.`, score: 1 },
      { text: `Hide in the dark and observe. Wait until the mob vents their anger and disperses, then send someone to collect the body and record it symbolically. You don't want to bring trouble upon yourself.`, score: 2 },
      { text: `Fire a whistling arrow into the air from horseback, loudly proclaiming the Lord's law to try and disperse the crowd. Once the mob starts throwing stones at you, you have no choice but to retreat.`, score: 3 },
      { text: `Dismount with drawn sword, walk alone to the pyre, and shield the scholar. You clearly know these irrational madmen will likely tear you to pieces along with him, but you will absolutely not compromise with the mob.`, score: 4 },
    ],
  },
  {
    id: 'valor-6',
    trait: 'valor',
    text: `You and a few serfs are patrolling the edge of the Black Forest and encounter a giant man-eating bear driven mad by the severe cold. It crushes a serf's skull with one slap. You only have a short sword in your hand and are not wearing heavy armor.`,
    options: [
      { text: `Immediately mount your horse and flee back to the castle. Your life belongs to the king and the battlefield; it is not meant to be traded for a beast in this wilderness. Going back to call heavy infantry is the correct tactic.`, score: 1 },
      { text: `Throw the rations you carry or even the saddlebags of your horse at the giant bear to divert its attention, and take the opportunity to flee at full speed, leaving the remaining serfs where they are to their fate.`, score: 2 },
      { text: `Ride around the giant bear on horseback, yelling loudly and throwing stones at it, trying to lure it away. But you will never dismount and enter its killing range.`, score: 3 },
      { text: `Dismount, raise your short sword, and face this behemoth head-on, roaring loudly to attract all its hatred. You are almost certainly going to die, but this is the only way to buy escape time for the serfs.`, score: 4 },
    ],
  },
  {
    id: 'valor-7',
    trait: 'valor',
    text: `Two armies face each other, and the enemy sends out a giant champion knight over two meters tall. He has consecutively smashed the skulls of three of your brave warriors, and your morale is on the verge of collapse. If no one dares to fight anymore, the army will rout.`,
    options: [
      { text: `Sound the horn for retreat. Since you cannot win in a duel, a tactical retreat to preserve troops is what an excellent commander does. Going to die for the sake of petty disputes is the lowest vanity.`, score: 1 },
      { text: `Tear up the rules of engagement and directly order three hundred archers to fire, turning that giant into a pincushion. You don't care about being called despicable as long as you can win the war.`, score: 2 },
      { text: `Take out a heavy bag of gold coins and offer a huge reward on the spot to recruit a death-defying mercenary to fight in your place. You bought morale with money and also saved your own life.`, score: 3 },
      { text: `Push your adjutant aside, draw your sword, and step into the dueling arena yourself. You know that in the face of absolute power, you will not last three rounds before being smashed into meat paste, but a commander's blood is the only spark to awaken the entire army to fight to the death.`, score: 4 },
    ],
  },
  {
    id: 'valor-8',
    trait: 'valor',
    text: `The fortress walls are breached, and you and the last dozen or so blood-soaked remnants are blocked in the inner keep's hall. The enemy commander shouts from outside: As long as you lay down your weapons and kneel to swear allegiance, you can not only live but also keep the title of baron.`,
    options: [
      { text: `Throw down your bloody sword, push the door open, walk out and kneel. Dead men cannot restore a family. Enduring humiliation to survive and lurk in the enemy camp is the most responsible approach to the family's continuation.`, score: 1 },
      { text: `Change into the tattered clothes of a dead common soldier, smear your face with mud and blood, and try to play dead or slip away in the chaos when the enemy rushes in to loot the spoils.`, score: 2 },
      { text: `Negotiate through the door, demanding the enemy commander swear on sacred relics to let these dozen soldiers go. In exchange, you are willing to walk out alone and accept the fate of the guillotine.`, score: 3 },
      { text: `Lock the heavy oak door, raise your broken shield, and take the lead in singing an ancient battle song. You refuse any charitably given survival, choosing to complete the knight's final curtain call amidst flying swords and raging fire.`, score: 4 },
    ],
  },
  {
    id: 'oath-1',
    trait: 'oath',
    text: `The lord flew into a rage because a neighboring village could not pay the autumn tax, and ordered you to lead the army to burn down the entire village. When you were knighted, you swore a heavy oath on the Bible that you must absolutely obey any command of the lord.`,
    options: [
      { text: `Refuse to execute it. As the administrator of the territory, protecting the lives of innocent serfs and the labor force for the coming year is far more valuable than blindly obeying the absurd command of a tyrant.`, score: 1 },
      { text: `Bribe the herald with a heavy sum to temporarily withhold the order, hoping the lord will forget about it after sobering up. You used delaying tactics to evade the oath and also saved the village.`, score: 2 },
      { text: `Secretly dispatch people to evacuate all villagers in advance, and then lead troops to burn down the empty thatched cottages. You executed the lord's order to "burn the village" and preserved your conscience.`, score: 3 },
      { text: `Personally raise a torch to ignite the serfs' houses. Even if this earns you the condemnation of the whole realm and plunges you into hell, a knight's oath to his liege lord brooks no violation whatsoever.`, score: 4 },
    ],
  },
  {
    id: 'oath-2',
    trait: 'oath',
    text: `The two countries have just signed a truce before sacred relics. That very night, the enemy's main convoy transporting grain and forage gets stuck in a swamp. As long as you order a surprise attack right now, you can completely paralyze the enemy country and win the war.`,
    options: [
      { text: `Order a surprise attack immediately. Winning the war and saving the lives of tens of thousands of your soldiers is enough to wash away the crime of tearing up the contract. History is always written by the victors.`, score: 1 },
      { text: `Order your subordinates to change into the tattered clothes of roving bandits to burn the grain carts. You destroyed the enemy's supplies, but as long as you deny it to the death, you have nominally not violated the truce.`, score: 2 },
      { text: `Strictly order your subordinates to hold their ground, but you "accidentally" send someone to leak the news of the trapped grain carts to nearby barbarian tribes, borrowing a knife to kill.`, score: 3 },
      { text: `Order your troops to lay down their weapons and help the enemy push the grain carts out of the swamp. A contract made before sacred relics is inviolable, even when dealing with enemies.`, score: 4 },
    ],
  },
  {
    id: 'oath-3',
    trait: 'oath',
    text: `Your deceased father once signed a usurious contract with a greedy merchant guild, requiring half of the territory's grain to be handed over every year. This year, there is a severe drought. If you hand over the exact amount of grain, more than half of your serfs will starve to death.`,
    options: [
      { text: `Publicly tear up the contract. A ruler's primary responsibility is to keep his subjects alive. If the serfs all die, the territory will collapse. The debts of the dead should not be borne by the living.`, score: 1 },
      { text: `Mix a large amount of sand and inferior wood sawdust into the grain being handed over. You made up the weight required by the contract, kept the real grain, and forced the merchant guild to swallow a bitter pill.`, score: 2 },
      { text: `Empty the family treasury, sell ancestral armor and warhorses, and buy grain at high prices from other territories to hand over to the merchant guild. You fulfilled the contract but bankrupted the family completely.`, score: 3 },
      { text: `Load the last grain of clean wheat in the territory onto a cart and hand it over to the merchant guild. Even if you have to listen to the wails of starving serfs outside the castle every day, a black-and-white contract is the foundation of a noble's standing.`, score: 4 },
    ],
  },
  {
    id: 'oath-4',
    trait: 'oath',
    text: `You once made a blood oath with your childhood sweetheart, a commoner girl, that you would marry no one but her in this life. Now, the king orders you to immediately marry the daughter of a neighboring duke to facilitate a military alliance against a barbarian invasion.`,
    options: [
      { text: `Marry the duke's daughter. The survival of the kingdom and the lives of a hundred thousand soldiers on the border are far more important than a naive childhood oath. This is the duty a noble ought to fulfill.`, score: 1 },
      { text: `Marry the duke's daughter, but secretly settle your childhood sweetheart in a hidden manor as a mistress. You completed the political marriage and physically kept her.`, score: 2 },
      { text: `Kneel before the king, surrender all your territories, wealth, and titles, and beg the king to strip you of your knighthood in exchange for your freedom to honor your marriage vow.`, score: 3 },
      { text: `Publicly defy the decree in the royal palace hall, loudly reading the blood oath you made back then. You would rather carry the crime of treason and walk to the guillotine than break the promise you made.`, score: 4 },
    ],
  },
  {
    id: 'oath-5',
    trait: 'oath',
    text: `You swore by your knight's honor to act as a proxy and fight a Trial by Combat for a scholar. But when you step onto the battlefield, you discover the opposing proxy is your long-lost biological brother.`,
    options: [
      { text: `Immediately drop your weapon and withdraw from the duel. Blood is thicker than water. Committing the felony of killing a family member for a stranger's oath is extremely contrary to ethics and reason.`, score: 1 },
      { text: `Intentionally expose a flaw during the exchange, take a slight injury, and immediately concede defeat. You fulfilled the oath to "fight for him" and cleverly saved your brother.`, score: 2 },
      { text: `Exhaust your family fortune to offer an astronomical ransom to your brother on the spot, begging him to voluntarily forfeit in the first round. You try to use money to buy off this irreconcilable conflict.`, score: 3 },
      { text: `Lower your visor and thrust your longsword into your own brother's chest without hesitation. Since the oath of proxy combat was made, this sword is driven only by rules and recognizes no blood relations.`, score: 4 },
    ],
  },
  {
    id: 'oath-6',
    trait: 'oath',
    text: `You took an oath guaranteeing absolute safety for the enemy envoy within your territory. That night, your scouts intercept a secret letter confirming that this very envoy poisoned your most respected mentor three years ago.`,
    options: [
      { text: `Immediately lead men to rush into the guest room and behead him. A safety guarantee does not apply to murderers. Avenge your mentor and eliminate a dangerous enemy spy is an absolutely correct decision.`, score: 1 },
      { text: `Strip off his clothes, confiscate his horse, and drive him out of the territory's borders overnight in a blizzard. If he freezes to death outside the border, it doesn't count as you breaking the safety oath within your territory.`, score: 2 },
      { text: `Escort him all the way to the border, but the moment he steps out of your territory, you immediately throw a white glove at him, demanding a fight to the death in a duel of revenge.`, score: 3 },
      { text: `Provide him with the best wine and the most elite guards, and safely escort him back to the enemy country. As long as the safety oath is still in its valid period, you must endure it even when facing your master's murderer.`, score: 4 },
    ],
  },
  {
    id: 'oath-7',
    trait: 'oath',
    text: `Two countries signed a peace treaty, exchanging their eldest sons as hostages. If one party breaches the treaty, the other must execute the hostage. Today, the enemy country blatantly breaches the treaty and invades in force. That enemy hostage just turned ten.`,
    options: [
      { text: `Strictly imprison the boy as a bargaining chip to exchange for your own son. Killing a child does not help the war situation at all; retaining a hostage is the most rational gamble.`, score: 1 },
      { text: `Lock the boy in a damp water dungeon, cut off food and drink, and publicly announce that he died of the plague. You don't want to personally swing the blade and bear the infamy of killing a child, but you create the established fact of death.`, score: 2 },
      { text: `Forcefully shave the boy's head and send him to the most remote monastery for life imprisonment. You nominally ended his life as a "noble heir," replacing bloodshed.`, score: 3 },
      { text: `Personally drag the crying boy to the castle courtyard and swing down the executioner's axe in front of the whole army. The treaty stipulates the price of betrayal, and the weight of a contract is above all personal morality.`, score: 4 },
    ],
  },
  {
    id: 'oath-8',
    trait: 'oath',
    text: `Ten years ago, to pray for your mother's recovery from illness, you swore before an idol that you would never eat meat in this life. Now you are trapped in an isolated city, exhausted of ammunition and food, and will break out tomorrow. And the only thing left in front of you is the last piece of dead horse meat.`,
    options: [
      { text: `Gorge yourself on the horse meat. What the gods need is a knight who can survive to defend his home and country, not a useless piece of trash who is easily slaughtered because he is too hungry to hold a sword.`, score: 1 },
      { text: `Boil the horse meat into a thick soup, drink only the broth, and throw away all the meat chunks. You use this self-deceiving method to tell yourself that you did not chew any meat.`, score: 2 },
      { text: `Refuse to eat the horse meat, force yourself to chew the leather on the saddle and the dead grass on the ground to stave off hunger. You participate in the breakout with an extremely weak body, leaving life and death to fate.`, score: 3 },
      { text: `Even if you vomit acid from hunger, you will absolutely not touch a bite of the horse meat. You calmly accept the outcome of being hacked to death in tomorrow's breakout because you have no strength at all, because breaking an oath to the gods is more terrifying than death.`, score: 4 },
    ],
  },
  {
    id: 'loyalty-1',
    trait: 'loyalty',
    text: `Your closest comrade-in-arms was found to have embezzled military pay to pay his sister's ransom. At this moment, he is blocked in his tent by the military police captain and a dozen spearmen, about to be escorted to the execution ground.`,
    options: [
      { text: `Immediately order your men to assist the military police in taking him down. Everyone is equal before military law. Shielding a criminal who stole military pay will ruin the discipline of the entire army and the prestige of the commander.`, score: 1 },
      { text: `Turn around and pretend not to have seen it, letting the military police captain act according to the rules. You don't want to clash with military law for him, nor do you want to be implicated as an accomplice.`, score: 2 },
      { text: `Bitterly plead with the military police captain and take out all your savings to try to cover the deficit for him, but you will absolutely not draw your weapon to confront the law enforcers.`, score: 3 },
      { text: `Draw your sword and stand back-to-back with him aiming at the military police. You don't care what capital crime he committed; you just want to use blood to carve out an escape path for him.`, score: 4 },
    ],
  },
  {
    id: 'loyalty-2',
    trait: 'loyalty',
    text: `Your lord was usurped by his younger brother, and the king also declared him a traitor. His army is routed, and he is now bringing a few remnants to your castle gates, begging you for asylum.`,
    options: [
      { text: `Immediately tie him up and hand him over to the usurper. The whole kingdom is hunting him down. Tying the fate of your territory to a sinking ship will only cause your subjects to be buried with him.`, score: 1 },
      { text: `Refuse to open the city gates, but take advantage of the dark to secretly lower a few bags of gold coins and dry rations with a basket. You don't want to get into trouble and can only provide this travel money for fleeing.`, score: 2 },
      { text: `Provide him with several fast horses and your top ten private soldiers to escort him to the border, but you absolutely forbid him from stepping into your castle and raising his flag.`, score: 3 },
      { text: `Throw open the city gates to welcome him inside, raise his lion flag on the tower, and order the entire city to seal the gates in preparation for the siege of the royal army. You swore loyalty, and you will absolutely not betray it.`, score: 4 },
    ],
  },
  {
    id: 'loyalty-3',
    trait: 'loyalty',
    text: `Your knight brother who grew up with you secretly converted to paganism. The Inquisition discovered this and ordered you to personally lead Crusaders to his manor to carry out the arrest.`,
    options: [
      { text: `Personally smash open his doors and take him down. Heresy is a contagious plague that endangers the soul of the entire kingdom. Duty to the gods must override personal affection.`, score: 1 },
      { text: `Send your adjutant to lead a team for the arrest, while you claim illness and stay behind closed doors. You are unwilling to protect a heretic, but you absolutely do not want to see him tied to the stake with your own eyes.`, score: 2 },
      { text: `Send a confidant to deliver a secret letter telling him to flee an hour before the Crusaders arrive. You bought him a chance of survival, but stay in the camp yourself to preserve your power and position.`, score: 3 },
      { text: `Ride alone into his manor, take off your Crusader surcoat, and escort him to flee into the wilderness. You calmly accept the fate of being excommunicated and hunted all over Europe.`, score: 4 },
    ],
  },
  {
    id: 'loyalty-4',
    trait: 'loyalty',
    text: `The old commander who treated you like his own son was hit by a poisoned arrow, and his wound is festering and emitting a highly contagious stench. The accompanying monks have all fled, leaving him in the tent to die in agony.`,
    options: [
      { text: `Order him and the tent to be burned to ashes. This can completely stop the plague from spreading in the military camp and also instantly end his unbearable torment. It is being responsible to the entire army.`, score: 1 },
      { text: `Set up a cordon fifty paces outside the tent, strictly forbidding anyone from approaching. You let him breathe his last alone in the darkness and stench; this is the safest way to isolate an infectious disease.`, score: 2 },
      { text: `Toss a jug of strong liquor and a clean dagger into the tent from afar. You don't dare to approach the toxic gas and can only provide him with a tool for a decent self-termination.`, score: 3 },
      { text: `Send away the guards and walk into the tent filled with deadly miasma. You tightly hold his festering, oozing hand and hum the battle songs of his youth for him until he breathes his last.`, score: 4 },
    ],
  },
  {
    id: 'loyalty-5',
    trait: 'loyalty',
    text: `You discover that your sworn brother is plotting to assassinate the cruel but lawful king. He invites you to join this coup; if it fails, all participants will be flayed and dismembered.`,
    options: [
      { text: `Immediately report him to the king's intelligence chief. A tyrant is still a monarch, and assassination will trigger a tragic civil war. You must betray your brother to save tens of thousands of commoners who might die in the flames of war.`, score: 1 },
      { text: `Sternly refuse to join, and immediately flee the capital under the guise of inspecting your territory. You don't want to participate in this crazy suicidal plan, you just want to get as far away from this impending storm as possible.`, score: 2 },
      { text: `Refuse to join his plan, but swear on a cross never to leak a word. You won't help him kill the king, but you absolutely won't send him to the executioner's chopping block either.`, score: 3 },
      { text: `Firmly grasp his wrist and promise to polish your assassination dagger tonight. You don't care at all about the politics and laws of the kingdom; as long as your brother is going to hell, you will clear the path for him.`, score: 4 },
    ],
  },
  {
    id: 'loyalty-6',
    trait: 'loyalty',
    text: `In a disastrous battle, your army is in a full-scale rout. You look back and find the old lord heavily surrounded by hundreds of enemy heavy spearmen, already trapped in a deadly situation.`,
    options: [
      { text: `Sound the assembly horn and lead the remaining cavalry to decisively withdraw from the battlefield. The lord is already dead, the battle outcome is decided, and bringing the remaining forces back to defend the fortress is the duty of a commander.`, score: 1 },
      { text: `Order your archers to fire indiscriminately towards the encirclement. You hope the rain of arrows might luckily block the enemy, or perhaps end the lord's suffering early.`, score: 2 },
      { text: `Lead the cavalry in a brief charge on the periphery of the encirclement, attempting to tear an opening. Once encountering heavy setbacks, immediately turn your horse around and retreat; you've tried your best.`, score: 3 },
      { text: `Throw away your heavy shield, raise your greatsword with both hands, and launch a reverse charge alone against hundreds of spears. You will either hack the encirclement to pieces and stand by his side, or be skewered into meat paste.`, score: 4 },
    ],
  },
  {
    id: 'loyalty-7',
    trait: 'loyalty',
    text: `You and your best friend are captured by the enemy. The enemy warlord hands you a dagger; as long as you personally execute your friend, you can exchange for the freedom of fifty of your captive soldiers, otherwise everyone will be tortured to death.`,
    options: [
      { text: `Take the dagger without hesitation and pierce your friend's heart. This is a cruel but necessary math problem in war. Sacrificing one person for the lives of fifty veterans is a commander's responsibility.`, score: 1 },
      { text: `Throw the dagger on the ground, hinting for your mercenaries to do it. You preserve your reputation of not killing your brother, but still tacitly agree to use his life to buy the main force's freedom.`, score: 2 },
      { text: `Refuse to kill, and instead offer the warlord to hand over your family's hereditary fief and castle, going bankrupt attempting to buy back everyone's lives.`, score: 3 },
      { text: `Reverse your grip and viciously stab the dagger into your own throat. You don't want your soldiers to be tortured, but you will absolutely not use the blood of betraying your brother to buy freedom.`, score: 4 },
    ],
  },
  {
    id: 'loyalty-8',
    trait: 'loyalty',
    text: `The old Sword Saint who taught you swordsmanship was falsely accused of being a deserter and stripped of his knighthood. Now reduced to a ragged beggar, he is being thrown into the muddy water and pelted with cow dung by commoners in the town.`,
    options: [
      { text: `Ride past him expressionlessly. Getting involved with an untouchable stripped of honor will completely destroy the reputation and future you have painstakingly built in the court.`, score: 1 },
      { text: `Wait until late at night when the crowd disperses, and send an unfamiliar squire to throw a small bag of silver coins under the bridge arch where he sleeps. You will never publicly admit you know him.`, score: 2 },
      { text: `Draw your riding crop to disperse the mob, loudly warning them not to use lynching anymore. But you never dismounted, nor did you address him by his former noble title.`, score: 3 },
      { text: `Dismount and walk into the filthy muddy water. Under the shocked gazes of the mob, you kneel to him on one knee, offer your sword with both hands, and loudly proclaim that he will always be the greatest knight in your heart.`, score: 4 },
    ],
  },
  {
    id: 'honor-1',
    trait: 'honor',
    text: `The siege has lasted for six months, and your grain and forage have bottomed out. Scouts discovered a secret passage leading to the enemy's only water source. As long as a deadly poison is dropped, the enemy forces will surely collapse within three days, and you can save tens of thousands of starving citizens in the city.`,
    options: [
      { text: `Immediately order the poisoning. In war, there are only winners and losers, no baseness. Being able to use a packet of poison to save the lives of tens of thousands of citizens and soldiers is the iron blood and mercy a commander should have.`, score: 1 },
      { text: `Send people to throw dead animal carcasses into the upstream water source. You did not directly use underhanded poison, but using natural plague to weaken the enemy is a conventional siege tactic.`, score: 2 },
      { text: `Sternly refuse to poison, but order the army to launch a night raid when the enemy is fatigued from water shortage. You don't use despicable methods, but you will utilize absolute tactical advantages.`, score: 3 },
      { text: `Seal the secret passage, and behead the general who suggested poisoning. Knightly combat absolutely forbids the use of foul play outside the blade's edge, even if it means your city will be breached tomorrow.`, score: 4 },
    ],
  },
  {
    id: 'honor-2',
    trait: 'honor',
    text: `The commanders of both armies duel in front of the battle formations to decide the victory. During the fierce battle, the enemy commander steps into a hidden pit and slips, not only dropping his longsword but also having his helmet roll off, exposing himself extremely awkwardly under your sword.`,
    options: [
      { text: `Pierce his throat with a sword strike without hesitation. On the battlefield, there is only life and death, no sparring. The enemy's mistake is a god-given opportunity; winning the war is the ultimate goal.`, score: 1 },
      { text: `Step on his chest, forcing him to surrender in front of the entire army. You didn't kill an unarmed man, but you made full use of his accidental mistake to gain the maximum political benefit.`, score: 2 },
      { text: `Stop attacking, take a step back, loudly mock his embarrassment, and then signal the squire behind him to hand him a new sword to continue this duel.`, score: 3 },
      { text: `Throw your own longsword on the ground too, and take off your helmet. A knight's duel must be absolutely fair. Since he lost his weapon and armor, you will use hand-to-hand combat to decide the victor with him.`, score: 4 },
    ],
  },
  {
    id: 'honor-3',
    trait: 'honor',
    text: `On the eve of the decisive battle, a notorious thief sneaks into your tent. He stole the enemy's top-secret troop deployment map and demands a huge sum of money. With this map, you can annihilate the enemy with minimal casualties tomorrow.`,
    options: [
      { text: `Readily pay the huge sum and adjust your tactics according to the deployment map. Intelligence is the lifeblood of war; utilizing spies and traitors is a required course for any mature commander.`, score: 1 },
      { text: `Snatch the deployment map and kick the thief out of the tent. You won't pay money to this kind of scum, but you will naturally take a look at the intelligence delivered to your door as a reference for tomorrow's deployment.`, score: 2 },
      { text: `Throw the deployment map into the brazier to burn it, beat the thief severely, and throw him out. You believe more in the intelligence scouted by your own scouts than the dirty things brought by a profit-driven thief.`, score: 3 },
      { text: `Hang the thief on the spot, and send an envoy to deliver the ashes of the deployment map and the thief's head to the enemy commander. A knight's victory must come from frontal sword points and must absolutely not be tainted by any schemes and tricks.`, score: 4 },
    ],
  },
  {
    id: 'honor-4',
    trait: 'honor',
    text: `Because of your tactical misjudgment, the kingdom's elite order of knights was completely wiped out. The king is furious and is preparing to hang the adjutant responsible for transmitting intelligence, because everyone thinks it was a delay in intelligence that caused the defeat.`,
    options: [
      { text: `Keep silent. The king needs a scapegoat to vent his anger. Trading the adjutant's life for your life as the commander is a worthwhile deal; you need to live to continue serving the kingdom.`, score: 1 },
      { text: `Step forward to plead for the adjutant, claiming that there were indeed objective difficulties in transmitting the intelligence, and begging the king to change the hanging to exile. You try to save his life, but still do not admit it was your own mistake.`, score: 2 },
      { text: `Privately console the adjutant's family with a heavy sum of money, and secretly arrange for a death row inmate to replace the adjutant at the execution. You use money and power to wash away the unease of conscience, but maintain your perfect public reputation.`, score: 3 },
      { text: `Walk up to the main hall, take off your sword in front of all the nobles, and place it before the throne. Loudly announce that the entire responsibility for the defeat lies in your own stupidity, demand that the king immediately release the adjutant and hang yourself.`, score: 4 },
    ],
  },
  {
    id: 'honor-5',
    trait: 'honor',
    text: `Your troops are surrounded in a valley by the enemy's main force. The only way to survive is to change into newly captured enemy surcoats, fly the enemy's flag, and disguise yourselves as wounded enemy soldiers under the cover of night to slip through the defense line checkpoints.`,
    options: [
      { text: `Immediately order the entire army to change into enemy uniforms. All is fair in war. As long as you can bring the living soldiers home, disguise and deception are the most efficient tactics.`, score: 1 },
      { text: `Don't change uniforms, but force a captured enemy general to walk at the front of the line, pressing a knife against his lower back, and make him use the enemy language to bluff the checkpoint gates open.`, score: 2 },
      { text: `Refuse to fly the enemy flag. Under the cover of night, order the whole army to remove all badges and reflective armor, maintain absolute silence, and climb out of the cliffs at the edge of the defense line in the dark to break through.`, score: 3 },
      { text: `Order the whole army to dress neatly and hold your own family's battle flag high. It's better to die upright and honorably in a frontal breakout than to don the skin of the enemy to survive.`, score: 4 },
    ],
  },
  {
    id: 'honor-6',
    trait: 'honor',
    text: `You captured the enemy crown prince. According to knightly custom, as long as the other party hands over matching gold, he can be ransomed. But you discover the enemy country is on the brink of internal chaos; if you detain the crown prince, the enemy country will inevitably splinter within three months.`,
    options: [
      { text: `Tear up the ransom contract and strictly imprison the crown prince. This can not only bloodlessly destroy an enemy country but also permanently resolve the border threat. This is unparalleled strategic foresight.`, score: 1 },
      { text: `Superficially accept ransom negotiations, but deliberately propose extremely harsh, astronomical demands that the other party couldn't possibly gather within three months. You use reasonable excuses to delay time and achieve the goal of splitting the enemy country.`, score: 2 },
      { text: `Strictly follow custom, collect the ransom, and release the person, but secretly send people to spread rumors on the crown prince's return route that he has surrendered and committed treason, thereby weakening his political prestige.`, score: 3 },
      { text: `Upon receiving the standard gold, not only immediately release the crown prince but also send heavy troops to safely escort him back to the enemy capital. You will absolutely not use the other party's internal chaos to seek strategic benefits; your actions must be open and aboveboard.`, score: 4 },
    ],
  },
  {
    id: 'honor-7',
    trait: 'honor',
    text: `An alchemist shows you a secret weapon called "Greek Fire." Sprayed during a siege, even heavily armored knights will instantly be burned to charcoal. This is considered extremely unethical dark magic by traditional knights.`,
    options: [
      { text: `Immediately purchase the formula at a high price and mass-produce it. The weapons of the era are advancing, and stubbornly clinging to so-called honor will only lead to elimination. Trading the wails of enemies for the absolute safety of the territory is very worthwhile.`, score: 1 },
      { text: `Do not actively purchase it, but tacitly allow the mercenary leader under you to privately contact the alchemist and equip a small amount of this weapon. As long as it is not used by your direct troops, you do not have to bear the infamy of using dark magic.`, score: 2 },
      { text: `Refuse to use it against knight armies of equal status, but spend money to buy the formula and store it in the cellar as a final trump card for future defense against bottomless barbarian invasions.`, score: 3 },
      { text: `Smash the alchemist's flask on the spot and order him permanently exiled from the borders. A knight's combat must be a courageous collision of crossing swords. Using cruel dark magic to turn enemies to ashes is the ultimate defilement of honor.`, score: 4 },
    ],
  },
  {
    id: 'honor-8',
    trait: 'honor',
    text: `During a chaotic breakout battle, the enemy commander accidentally falls off his horse and breaks his neck, dying. The king mistakenly believes you personally slew the enemy general and decides to award you the kingdom's highest honor, the Oak Leaf Knight Medal, and bestow vast fiefdoms upon you.`,
    options: [
      { text: `Calmly accept the medal and fiefdom. On the battlefield, luck is part of strength. Since dead men tell no tales, using this heaven-sent merit to expand your family's power is what a smart person does.`, score: 1 },
      { text: `Accept the medal, but speak vaguely during the award speech, only emphasizing "This is the result of the joint efforts of all the soldiers in the army." You didn't directly lie and say you killed him, but you went with the flow and took the benefits.`, score: 2 },
      { text: `Privately confess the truth to the king's confidant, attempting to return the fief. But if the confidant advises you to make the best of a mistake to boost the morale of the whole country, you will eventually reluctantly put on this medal for the big picture.`, score: 3 },
      { text: `At the award ceremony, push away the medal handed by the king in front of all the city's citizens, and loudly announce that the enemy general died by accident. You would rather continue to be an obscure, poor knight than steal even a shred of false glory.`, score: 4 },
    ],
  },
  {
    id: 'justice-1',
    trait: 'justice',
    text: `Your biological uncle, a powerful duke who provides all the military pay for your army, gets drunk and rides his horse to trample to death the young child of a serf. The angry serfs carry the body to your court, demanding that you, as the highest official of the territory, uphold justice.`,
    options: [
      { text: `Imprison the serfs on charges of "falsely accusing a noble." The duke's funds are the lifeline that sustains the army and defends the territory. Sanctioning the duke over a serf's child is extremely short-sighted and irresponsible.`, score: 1 },
      { text: `Sentence the duke to pay the serfs an extremely generous "blood money" as compensation. You utilize the clause in the law allowing fines to redeem crimes, letting the noble buy a life with money, and pacifying the incident.`, score: 2 },
      { text: `Publicly whip the duke's groom fifty times as a scapegoat to quell the commoners' anger, while privately forcing your uncle to bear the serf family's taxes for life.`, score: 3 },
      { text: `Order the guards to strip the duke of his sword on the spot, and sentence him to hanging strictly according to the murder crime in the lord's codex. You know perfectly well this will cut off military pay and trigger a family civil war.`, score: 4 },
    ],
  },
  {
    id: 'justice-2',
    trait: 'justice',
    text: `During a great famine in the city, a wealthy merchant hoards tons of grain in his cellar, waiting for the highest bidder. One of your soldiers, red-eyed with hunger, smashes open the cellar and steals a sack of wheat to save his dying younger brother, but is caught. By law, theft is punished by chopping off the right hand.`,
    options: [
      { text: `Immediately order the soldier's right hand to be severed. The law is the law; if the commander condones the looting of private property, merchants will flee, and the entire city will starve.`, score: 1 },
      { text: `Publicly chop off the soldier's right hand to maintain the dignity of the law, but secretly use your own money to buy high-priced grain and deliver it to his brother's bed. You use personal wealth to make up for the coldness of the law.`, score: 2 },
      { text: `Forcefully legalize that sack of wheat under the name of 'military requisition,' and sentence the soldier to repay the merchant ten times over with his military pay after the war. You use bureaucratic loopholes to give each a slap on the wrist.`, score: 3 },
      { text: `Chop off the right hand the soldier used to steal, and simultaneously strip the merchant naked and lock him to the pillory on charges of 'hoarding during a disaster year,' confiscate all his grain, and divide it equally in public. Absolute fairness favors no class.`, score: 4 },
    ],
  },
  {
    id: 'justice-3',
    trait: 'justice',
    text: `While touring your territory, the king's illegitimate son brutally violates and severely injures a blacksmith's daughter. The king sends a secret envoy, ordering you to immediately and quietly release his son and smooth things over, otherwise he will crusade against you for treason.`,
    options: [
      { text: `Respectfully release the illegitimate son, and send people to exterminate or exile the blacksmith's family overnight. Defying royal power will only turn your family and territory to dust. On this continent, royal power is the greatest justice.`, score: 1 },
      { text: `Release the illegitimate son, but strongly advise the secret envoy to send him to a remote monastery for lifelong repentance. You don't dare to disobey the king, so you can only try to push this menace as far away as possible.`, score: 2 },
      { text: `Hold a closed-door trial, forcing the illegitimate son to sign an astronomical compensation contract to give to the blacksmith, and then expel him from your territory overnight. You try to use money to cover up the atrocities of class privilege.`, score: 3 },
      { text: `Tear the king's secret letter to pieces, drag the illegitimate son to the town square, and execute castration on him in front of all the commoners according to the law for rape. You strip away all privileges, even if tomorrow is doomsday for your family.`, score: 4 },
    ],
  },
  {
    id: 'justice-4',
    trait: 'justice',
    text: `Your most genius general has just led troops to repel a formidable enemy several times their size, saving the entire fortress. But as a "reward," he condoned the soldiers to sack a nearby neutral monastery, killing all the monks. The Church is furious and demands the culprit be handed over.`,
    options: [
      { text: `Sternly refuse the Church's demand and heavily guard this general. He has just saved tens of thousands of subjects, and the war still needs his command. Trading a hero's life for the debts of dead people is extremely foolish.`, score: 1 },
      { text: `Pick out dozens of lower-level soldiers who participated in the sacking, hang them as scapegoats to hand over to the Church, and simultaneously secretly transfer this general to other fronts. You saved your core asset with the lives of lower-class people.`, score: 2 },
      { text: `Publicly strip the general of all his titles and wealth as a severe punishment, but spare his life, allowing him to continue serving in the army as a nobody to redeem his crimes through meritorious deeds.`, score: 3 },
      { text: `Immediately send military police to arrest this general who just established peerless merit, and personally escort him to the Church to accept death by burning. Military merit can never become an immunity token for anyone to massacre innocents in exchange for exemption.`, score: 4 },
    ],
  },
  {
    id: 'justice-5',
    trait: 'justice',
    text: `Your most loyal squire once took a fatal arrow for you on the battlefield. Last night, after getting drunk, he accidentally beat a lowly tavern waitress to death during an argument. According to the law, a murderer must pay with his life.`,
    options: [
      { text: `Slip a bag of gold coins to the tavern owner to shut his mouth, and publicly declare the waitress died from an accidental fall. The life of a squire who shed blood for the country is far nobler than the life of an untouchable and shouldn't end on the gallows.`, score: 1 },
      { text: `You spend a huge sum of money to console the waitress's family and use your power to force the local judge to downgrade the case to "manslaughter," sparing the squire from death.`, score: 2 },
      { text: `Expel the squire from your tent, permanently strip him of his qualification to become a knight, and send him to serve in the most dangerous suicide squad on the frontline. You try to substitute the gallows with a near-certain death on the battlefield.`, score: 3 },
      { text: `Personally put shackles on him, push him onto the guillotine, and personally pull the blade lever. You owe him a life, but the dignity of the law owes him nothing.`, score: 4 },
    ],
  },
  {
    id: 'justice-6',
    trait: 'justice',
    text: `The royal court issues extremely harsh new tax laws to build the Queen's summer palace. The serfs in your territory really cannot afford the taxes. They kneel before your horse holding a "Tax Exemption Charter" granted by the late king two hundred years ago, begging you to stand up for them.`,
    options: [
      { text: `Order the guards to use spears to disperse the serfs, forcefully confiscating even the last grain of wheat. As a lord, your class interests are aligned with the court. Questioning royal tax laws is encouraging rebellion.`, score: 1 },
      { text: `Open your own cellar and make up this heavy tax for the serfs in the territory. You use your personal bankruptcy to avoid a direct conflict with royal power, playing the role of a pushover good guy.`, score: 2 },
      { text: `Doctor the account books, forging the illusion that the territory suffered a severe drought, and apply to the court for a partial tax reduction. You use the loopholes of the bureaucratic system to protect your subjects.`, score: 3 },
      { text: `Publicly kick the court's tax collector out of the castle, hold high that ancient "Charter," and announce that the new tax law is invalid in your territory. For the sake of the legitimate contracts of the lower-class serfs, you directly declare war on the supreme ruler.`, score: 4 },
    ],
  },
  {
    id: 'justice-7',
    trait: 'justice',
    text: `You discover that the local grand bishop, widely beloved by the populace and regarded as a saint, is actually a fraud who uses inferior alchemy to forge miracles. But it is precisely these fake miracles that bring countless pilgrims, making this once poor city extremely prosperous.`,
    options: [
      { text: `Keep silent about the scam, and demand a portion of the pilgrimage profits from the bishop to supplement your military funds. Exposing him brings no benefit and will completely destroy the economic lifeline of this city.`, score: 1 },
      { text: `Use this as leverage to secretly blackmail the bishop, forcing him to use massive amounts of wealth to build civilian hospitals and relief shelters. You utilize this hypocritical scam to squeeze substantive benefits for the weak.`, score: 2 },
      { text: `Privately meet with the bishop, warn him to stop while he's ahead, and force him to slowly reduce the display of "miracles" over a few years, trying to cool down this fanaticism in the smoothest, least damaging way possible.`, score: 3 },
      { text: `Step onto the altar and, in front of tens of thousands of fanatical pilgrims, smash the bishop's alchemical tools, revealing the truth. You don't care if this city goes bankrupt tomorrow, nor do you care if the commoners' faith collapses, simply because hypocrisy is not worthy of honor.`, score: 4 },
    ],
  },
  {
    id: 'justice-8',
    trait: 'justice',
    text: `In an extremely chaotic night raid, due to blocked vision and high tension, you accidentally struck and killed one of your own militia who darted out from the bushes. Besides yourself, no one else saw this happen. The law states that those who kill comrades must die.`,
    options: [
      { text: `Immediately pull your sword out of the dead body and pretend nothing happened, walking away. A commander's life concerns the victory or defeat of the entire campaign. Surrendering yourself for a militia who died by accident is extremely foolish affectation.`, score: 1 },
      { text: `Disguise the deceased as if killed by the enemy, bury him with the highest honors after the war, and anonymously send his widow a pension enough for three lifetimes to seek peace of mind.`, score: 2 },
      { text: `Confess the matter to the highest military tribunal after the war, but strongly defend that it was a reasonable accidental kill caused by the fog of war. You accept the punishment of demotion but desperately avoid the death penalty.`, score: 3 },
      { text: `Walk straight to the military judge, hand over your commander's seal and sword, and publicly admit you accidentally killed a comrade. You refuse any excuse of a "war accident" and demand to be publicly executed according to the murder law.`, score: 4 },
    ],
  },
];
