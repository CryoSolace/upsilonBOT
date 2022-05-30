x = '''
Yaretzi Lopez
Regina Gibson
Sienna Davis
Marcel Douglas
Yamilet Stuart
Shirley Rogers
Raymond Hubbard
Kolton Mccormick
Noah Mcclure
Madalynn Mcintyre
Donte Davenport
Zain Sellers
Lorelei Rocha
Melina Tyler
Jazlyn Archer
Christine Guerra
Glenn Bailey
Jaliyah Mcdonald
Kelsie Holder
Elijah Schaefer
Zackary Pollard
Charles Curry
Lukas Knight
Mariana Schmitt
Amber Liu
Justine Ramos
Ernest Schneider
Chelsea Bishop
Chasity Cooke
Payten Mcneil
Geovanni Hunter
Cash George
Lamont Trevino
Josephine Lamb
Ronald Larson
Jaylon Barrera
Shelby Galloway
Micah Lloyd
Zack Irwin
Ellen May
Aubree Wilson
Karen Barrera
Felicity Christensen
Alessandra Villarreal
Sophia Levine
Noe Merritt
Leila Savage
Ivan Stanley
Nasir Murillo
Taniya Ramos
Itzel Park
Quincy Patton
Marilyn Mendez
Rogelio Marshall
Erik Mann
Chaim Black
Livia Faulkner
Damon Weiss
Thaddeus Erickson
Abdiel Pitts
Felicity Travis
Aaron Mcneil
Alaina Simpson
Jesse Pennington
Lauren Clayton
Devon Hines
Sydnee Garrett
Chance Ingram
Uriah Poole
Ben Collins
Laylah House
Tania Gonzalez
London Macdonald
Jordan Romero
Jamie Garrison
Liana Hodges
Salvatore Love
Nylah Tate
Kane Dorsey
Ashlyn Schwartz
Jamarion George
Jimmy Hudson
Shirley Mullins
Raphael Gray
Delaney Costa
Isabel Heath
Zackary Grimes
Jakayla Stafford
Stephany Pham
Roger Kennedy
Leland Poole
Jaelynn Bright
Michael Alexander
Meadow Drake
Camden Tyler
Shea Barr
Nicolas Brennan
Stephen Anthony
Amelia Simmons
'''
y = ""
length = len(str(x))
k = 0
z = 0
x = x.replace(" ", "\n")
while k < length:
    if x[k] == "\n":
        y = y+ x[0:k] + '",\n"'
        x=x[k+1:]
        length = len(str(x))
        k=0
    k+=1
    
j = ["Yaretzi",
"Lopez",
"Regina",
"Gibson",
"Sienna",
"Davis",
"Marcel",
"Douglas",]
def eO(a):
    y = ""
    for i in (a):
        if a.index(i) % 2 == 0:
            y = y + '"' + str(i) + '",\n' 
    return y
y = y[2:-3]

j = ["Yaretzi",
"Lopez",
"Regina",
"Gibson",
"Sienna",
"Davis",
"Marcel",
"Douglas",
"Yamilet",
"Stuart",
"Shirley",
"Rogers",
"Raymond",
"Hubbard",
"Kolton",
"Mccormick",
"Noah",
"Mcclure",
"Madalynn",
"Mcintyre",
"Donte",
"Davenport",
"Zain",
"Sellers",
"Lorelei",
"Rocha",
"Melina",
"Tyler",
"Jazlyn",
"Archer",
"Christine",
"Guerra",
"Glenn",
"Bailey",
"Jaliyah",
"Mcdonald",
"Kelsie",
"Holder",
"Elijah",
"Schaefer",
"Zackary",
"Pollard",
"Charles",
"Curry",
"Lukas",
"Knight",
"Mariana",
"Schmitt",
"Amber",
"Liu",
"Justine",
"Ramos",
"Ernest",
"Schneider",
"Chelsea",
"Bishop",
"Chasity",
"Cooke",
"Payten",
"Mcneil",
"Geovanni",
"Hunter",
"Cash",
"George",
"Lamont",
"Trevino",
"Josephine",
"Lamb",
"Ronald",
"Larson",
"Jaylon",
"Barrera",
"Shelby",
"Galloway",
"Micah",
"Lloyd",
"Zack",
"Irwin",
"Ellen",
"May",
"Aubree",
"Wilson",
"Karen",
"Barrera",
"Felicity",
"Christensen",
"Alessandra",
"Villarreal",
"Sophia",
"Levine",
"Noe",
"Merritt",
"Leila",
"Savage",
"Ivan",
"Stanley",
"Nasir",
"Murillo",
"Taniya",
"Ramos",
"Itzel",
"Park",
"Quincy",
"Patton",
"Marilyn",
"Mendez",
"Rogelio",
"Marshall",
"Erik",
"Mann",
"Chaim",
"Black",
"Livia",
"Faulkner",
"Damon",
"Weiss",
"Thaddeus",
"Erickson",
"Abdiel",
"Pitts",
"Felicity",
"Travis",
"Aaron",
"Mcneil",
"Alaina",
"Simpson",
"Jesse",
"Pennington",
"Lauren",
"Clayton",
"Devon",
"Hines",
"Sydnee",
"Garrett",
"Chance",
"Ingram",
"Uriah",
"Poole",
"Ben",
"Collins",
"Laylah",
"House",
"Tania",
"Gonzalez",
"London",
"Macdonald",
"Jordan",
"Romero",
"Jamie",
"Garrison",
"Liana",
"Hodges",
"Salvatore",
"Love",
"Nylah",
"Tate",
"Kane",
"Dorsey",
"Ashlyn",
"Schwartz",
"Jamarion",
"George",
"Jimmy",
"Hudson",
"Shirley",
"Mullins",
"Raphael",
"Gray",
"Delaney",
"Costa",
"Isabel",
"Heath",
"Zackary",
"Grimes",
"Jakayla",
"Stafford",
"Stephany",
"Pham",
"Roger",
"Kennedy",
"Leland",
"Poole",
"Jaelynn",
"Bright",
"Michael",
"Alexander",
"Meadow",
"Drake",
"Camden",
"Tyler",
"Shea",
"Barr",
"Nicolas",
"Brennan",
"Stephen",
"Anthony",
"Amelia",
"Simmons",]
print(eO(j))