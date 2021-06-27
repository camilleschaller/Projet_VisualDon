**SUITE À DE NOMBREUX PROBLÈMES LORS DU DÉVELOPPEMENT AVEC NODE.JS ET NPM QUI , VISIBLEMENT, NE VEULENT PAS FONCTIONNER CORRECTEMENT SUR MON ORDINATEUR, JE N'AI PAS RÉUSSI À AFFICHER LES GRAPHIQUES.**

Choix jeu de données: 

https://www.kaggle.com/harshitshankhdhar/imdb-dataset-of-top-1000-movies-and-tv-shows

Repo du projet:

https://github.com/camilleschaller/Projet_VisualDon

Site publié:

https://projet-visual-don-qstqrc2s9-camilleschaller.vercel.app

# <u>Mes idées</u>

Le but serait de faire une infographique sur les 100 meilleurs films de tout les temps. Le jeu de données comportent 1000 lignes avec différentes informations tel que la date de sortie, les acteurs, le producteur, la durée, etc....

Je vais utiliser billboard.js pour créer les différents graphiques

#### Où j'ai trouvé les données

Toutes les données sont originaires de https://www.kaggle.com/harshitshankhdhar/imdb-dataset-of-top-1000-movies-and-tv-shows. J'aime beaucoup le cinéma, j'ai donc recherché des jeux de données concernant le cinéma ou la télévision en général. Je suis tombé sur pas mal de jeux de données différents, des en rapport avec netflix , etc.. qui étaient très intéressant mais il n'y avait pas assez de données à mon goût pour faire quelques choses de sympa. Je suis aussi tombé sur des jeux de données payants ou pas téléchargable ce qui ne convenaient donc pas. J'ai finalement trouvé le jeux de données sur Kaggle.com, qui propose les données du top 1000 des films notés par IMDb.

#### Transformation et préparation des données

J'ai d'abord transformer les données qui était au format CSV pour les mettre au format JSON grâce au site  https://csvjson.com/csv2json.

La préparation a été effectuée de la manière vue durant le cours. J'ai utilisé ramda pour faciliter la transformation des données. J'ai une quelques soucis pour certains graph. j'ai donc adapté comme je pouvais.

#### Explication des choix

Dans ce projet, je souhaitais avoir une vue d'ensemble sur le top 1000 IMDb, sans aller dans les détails en montrant de chose trop précise. C'est pourquoi j'ai choisi deux graphiques assez généraux, et j'ai développé un peu plus le top 3 des meilleurs films.

#### Choix du type de représentation

J'ai voulu utiliser un graphique en bâtons parce que ça me semble adapter à mon niveau débutant, je ne voulais pas essayer de faire des choses trop compliqué pour mon niveau et ne pas réussir à le réaliser. Mon niveaum'a un peu freiner car je pense qu'avec les données à disposition j'aurai pu faire des graphiques plus complexes et avec des animations.

#### Mon public cible

Ces graphiques s'adresse aux gens qui aiment le cinéma de manière générale. Les graphiques permettent d'en apprendre un peu plus sur les 1000 meilleurs films d'après IMDb . Il n'est pas nécessaire de posséder de grandes connaissances en cinéma pour comprendre ces simples graphiques .

## <u>Type de graphique</u>

- Diagramme en bâton avec les années de sorties (graph1)
- Diagramme circulaire pour les genres de films (graph2)
- 3 diagramme bâton pour le top 3
  - les notations
  - les recettes
  - la durée

# <u>Journal de bord</u>

## <u>28 avril</u>

Recherche de jeu de données

## <u>4 mai</u>

Choix du jeu de données sur Kaggle.com

## <u>15 mai</u>

Réflexion sur mes idées et les possibilités avec le jeu de données

### <u>20 mai</u>

Choix de différents graphiques à réaliser

### <u>21 juin</u>

- Mise en place de l'architecture des fichiers
- Téléchargement du jeu de données 
- Transformation du jeu du format csv à json : https://csvjson.com/csv2json 

### <u>23 juin</u>

- Préparation des données pour chaque graphique avec l'aide de ramda
  - Diagramme en bâton avec les années de sorties (graph1)
  - Diagramme circulaire pour les genres de films (graph2)
  - 3 diagramme pour le top 3 (graph3-4-5)
    - les notations
    - les recettes
    - la durée

### <u>24 juin</u>

- Création des diagrammes
  - Graph2 -> le diagramme ne correspond pas à ce qui était voulu car je n'ai pas trouvé comment séparé les données quand un film a plusieurs genre.
- Ecritue et structure de la page

### <u>27 juin</u>

Mise en ligne et finition
