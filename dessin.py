import tkinter
print("Pour dessiner, deplace ta souris en appuyant sur le bouton gauche.zé")
print("Pour changer de couleur, clique sur une des couleurs.")
fenêtre = tkinter.Tk()
canvas = tkinter.Canvas(fenêtre, width=1960, height=1080, bg="white")
canvas.pack()
dernierX, dernierY = 0,0
couleur = "black"
def enregister_position(event):
    global dernierX, dernierY
    dernierX = event.x
    dernierY = event.y
def quand_cliqué(event):
    enregister_position(event)
def quand_déplacé(event):
    canvas.create_line(dernierX, dernierY, event.x, event.y, fill = couleur, width = 3)
    enregister_position(event)
canvas.bind("<Button-1>",quand_cliqué)
canvas.bind("<B1-Motion>", quand_déplacé)
black_id = canvas.create_rectangle(10, 10, 30, 30, fill="black")
blue_id = canvas.create_rectangle(10, 35, 30, 55, fill="blue")
red_id = canvas.create_rectangle(10, 60, 30, 80, fill="red")
white_id = canvas.create_rectangle(10, 85, 30, 105, fill="white")
def définir_couleur_noir(event):
    global couleur
    couleur="black"
def définir_couleur_bleu(event):
    global couleur
    couleur="blue"
def définir_couleur_rouge(event):
    global couleur
    couleur="red"
def définir_couleur_blanc(event):
    global couleur
    couleur="white"
canvas.tag_bind(black_id, "<Button-1>", définir_couleur_noir)
canvas.tag_bind(blue_id, "<Button-1>", définir_couleur_bleu)
canvas.tag_bind(red_id, "<Button-1>", définir_couleur_rouge)
canvas.tag_bind(white_id, "<Button-1>", définir_couleur_blanc)
fenêtre.mainloop()
