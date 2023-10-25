import { TEAM_EXPERIENCE } from "../../../../utils/constants"
import { image } from "../../../../utils/images"

export const column1Data = <>
    <div className={styles.column1}>
        <div>
            <div className={styles.iconSection}> <img src={image.flowerIcon} height={25} width={25} /></div>
        </div>
        <h4>Personalized Nutrition Plans</h4>
    </div>
    <p>
      {TEAM_EXPERIENCE}
    </p>
</>