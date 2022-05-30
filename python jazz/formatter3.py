x = '''Acid Arrow
Acid Splash
Aid
Alarm
Alter Self
Animal Friendship
Animal Messenger
Animal Shapes
Animate Dead
Animate Objects
Antilife Shell
Antimagic Field
Antipathy/Sympathy
Arcane Eye
Arcane Hand
Arcane Lock
Arcane Sword
Arcanist's Magic Aura
Astral Projection
Augury
Awaken
Bane
Banishment
Barkskin
Beacon of Hope
Bestow Curse
Black Tentacles
Blade Barrier
Bless
Blight
Blindness/Deafness
Blink
Blur
Branding Smite
Burning Hands
Call Lightning
Calm Emotions
Chain Lightning
Charm Person
Chill Touch
Circle of Death
Clairvoyance
Clone
Cloudkill
Color Spray
Command
Commune
Commune with Nature
Comprehend Languages
Compulsion
Cone of Cold
Confusion
Conjure Animals
Conjure Celestial
Conjure Elemental
Conjure Fey
Conjure Minor Elementals
Conjure Woodland Beings
Contact Other Plane
Contagion
Contingency
Continual Flame
Control Water
Control Weather
Counterspell
Create Food and Water
Create Undead
Create or Destroy Water
Creation
Cure Wounds
Dancing Lights
Darkness
Darkvision
Daylight
Death Ward
Delayed Blast Fireball
Demiplane
Detect Evil and Good
Detect Magic
Detect Poison and Disease
Detect Thoughts
Dimension Door
Disguise Self
Disintegrate
Dispel Evil and Good
Dispel Magic
Divination
Divine Favor
Divine Word
Dominate Beast
Dominate Monster
Dominate Person
Dream
Druidcraft
Earthquake
Eldritch Blast
Enhance Ability
Enlarge/Reduce
Entangle
Enthrall
Etherealness
Expeditious Retreat
Eyebite
Fabricate
Faerie Fire
Faithful Hound
False Life
Fear
Feather Fall
Feeblemind
Find Familiar
Find Steed
Find Traps
Find the Path
Finger of Death
Fire Bolt
Fire Shield
Fire Storm
Fireball
Flame Blade
Flame Strike
Flaming Sphere
Flesh to Stone
Floating Disk
Fly
Fog Cloud
Forbiddance
Forcecage
Foresight
Freedom of Movement
Freezing Sphere
Gaseous Form
Gate
Geas
Gentle Repose
Giant Insect
Glibness
Globe of Invulnerability
Glyph of Warding
Goodberry
Grease
Greater Invisibility
Greater Restoration
Guardian of Faith
Guards and Wards
Guidance
Guiding Bolt
Gust of Wind
Hallow
Hallucinatory Terrain
Harm
Haste
Heal
Healing Word
Heat Metal
Hellish Rebuke
Heroes' Feast
Heroism
Hideous Laughter
Hold Monster
Hold Person
Holy Aura
Hunter's Mark
Hypnotic Pattern
Ice Storm
Identify
Illusory Script
Imprisonment
Incendiary Cloud
Inflict Wounds
Insect Plague
Instant Summons
Invisibility
Irresistible Dance
Jump
Knock
Legend Lore
Lesser Restoration
Levitate
Light
Lightning Bolt
Locate Animals or Plants
Locate Creature
Locate Object
Longstrider
Mage Armor
Mage Hand
Magic Circle
Magic Jar
Magic Missile
Magic Mouth
Magic Weapon
Magnificent Mansion
Major Image
Mass Cure Wounds
Mass Heal
Mass Healing Word
Mass Suggestion
Maze
Meld into Stone
Mending
Message
Meteor Swarm
Mind Blank
Minor Illusion
Mirage Arcane
Mirror Image
Mislead
Misty Step
Modify Memory
Moonbeam
Move Earth
Nondetection
Pass without Trace
Passwall
Phantasmal Killer
Phantom Steed
Planar Ally
Planar Binding
Plane Shift
Plant Growth
Poison Spray
Polymorph
Power Word Kill
Power Word Stun
Prayer of Healing
Prestidigitation
Prismatic Spray
Prismatic Wall
Private Sanctum
Produce Flame
Programmed Illusion
Project Image
Protection from Energy
Protection from Evil and Good
Protection from Poison
Purify Food and Drink
Raise Dead
Ray of Enfeeblement
Ray of Frost
Regenerate
Reincarnate
Remove Curse
Resilient Sphere
Resistance
Resurrection
Reverse Gravity
Revivify
Rope Trick
Sacred Flame
Sanctuary
Scorching Ray
Scrying
Secret Chest
See Invisibility
Seeming
Sending
Sequester
Shapechange
Shatter
Shield
Shield of Faith
Shillelagh
Shocking Grasp
Silence
Silent Image
Simulacrum
Sleep
Sleet Storm
Slow
Spare the Dying
Speak with Animals
Speak with Dead
Speak with Plants
Spider Climb
Spike Growth
Spirit Guardians
Spiritual Weapon
Stinking Cloud
Stone Shape
Stoneskin
Storm of Vengeance
Suggestion
Sunbeam
Sunburst
Symbol
Telekinesis
Telepathic Bond
Teleport
Teleportation Circle
Thaumaturgy
Thunderwave
Time Stop
Tiny Hut
Tongues
Transport via Plants
Tree Stride
True Polymorph
True Resurrection
True Seeing
True Strike
Unseen Servant
Vampiric Touch
Vicious Mockery
Wall of Fire
Wall of Force
Wall of Ice
Wall of Stone
Wall of Thorns
Warding Bond
Water Breathing
Water Walk
Web
Weird
Wind Walk
Wind Wall
Wish
Word of Recall
Zone of Truth
'''
y = ""
length = len(str(x))
k = 0
while k < length:
    if x[k] == "\n":
        
        y = y+ x[0:k] + '",\n"'
        x=x[k+1:]
        length = len(str(x))
        k=0
    k+=1
    
print(y)