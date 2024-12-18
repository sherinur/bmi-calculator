import { Router } from 'express';
import { CalculateService } from './calculate.service.js';

const router = Router();

const calculateService = new CalculateService();

router.post('/', (req, res) => {
    try {
        const { height, weight } = req.body;

        const BMI = calculateService.calculateBMI(height, weight);
        const CATEGORY = calculateService.categorizeBMI(BMI)

        const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="style.css">
            <title>BMI Calculator</title>
        </head>
        <body>
            
            <div class="container">
                <div class="box">
                  <h1>BMI Calculator</h1>
                  <div class="content">
                    <button class="back" id="submit"">Go Back</button>
                  </div>
                  <div class="result">
                    <p>Your BMI is</p>
                    <div id="result">00.00</div>
                    <p class="comment"></p>
                  </div>
        
                </div>
              </div>
        
            <!-- The Modal -->
            <div id="myModal" class="modal">
              <!-- Modal content -->
            <div class="modal-content">
              <span class="close">&times;</span>
              <p id="modalText"></p>
            </div></div>
        
            
        <script src="script.js"></script>
        
        </body>
        </html>
        `

        res.status(200).send(htmlContent)
    } catch(error) {
        next(error);
    }
});

export const CalculateRouter = router;