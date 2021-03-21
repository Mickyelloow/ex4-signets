import './Dossier.scss'; 
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import couvertureDefaut from '../images/couverture.webp';
import { useEffect, useState } from 'react';

export default function Dossier({id, nom, couleur, datemodif, couverture}) {
  const [menuModifier, setMenuModifier] = useState(null);
  
  const gererOuvrirMenu = (btn) => setMenuModifier(btn.currentTarget);
  const gererFermerMenu = () => setMenuModifier(null);

  return (
    <article className="Dossier" style={{backgroundColor: couleur}}>
      <div className="couverture">
        <IconButton className="deplacer" aria-label="déplacer" disableRipple={true}>
          <SortIcon />
        </IconButton>
        <img src={couverture || couvertureDefaut} alt={nom || "Dossier sans nom"}/>
      </div>
      <div className="info">
        <h2>{nom || "Dossier sans nom"}</h2>
        <p>Modifié : {formaterDate(datemodif)}</p>
      </div>
      <IconButton className="modifier" aria-label="modifier" size="small">
        <MoreVertIcon onClick={gererOuvrirMenu}/>
        <Menu
          id="modifier"
          anchorEl = {menuModifier}
          keepMounted
          open={Boolean(menuModifier)}
          onClose={gererFermerMenu}
        >
          <MenuItem onClick={gererFermerMenu}>Modifier</MenuItem>
          <MenuItem onClick={gererFermerMenu}>Supprimer</MenuItem>
        </Menu>
      </IconButton>
    </article>
  );
}

/**
 * Formate les objets date de Firestore et retourne une chaîne de caractères
 * @param {Object} d Objet date retourné par Firestore
 * @returns String date formatée en français
 */
function formaterDate(d) {
  const dateJs = d ? new Date(d.seconds*1000) : new Date();
  const mois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
  return `${dateJs.getDate()} ${mois[dateJs.getMonth()]} ${dateJs.getFullYear()}`;
}