# resume_NER_w_BOND

#### To run our code, please use: python run.py
#### To test, please use: python run.py --test=True

<br />

Visit our website:
qiwenzz.github.io/resume_ner/

## Dataset
We have obtained three different resume datasets from various data sources for the current project. The first dataset is downloaded from Kaggle. The second dataset is websraped from the website, postjobfree.com. The third dataset is downloaded from livecareer.com in pdf format, and then they are converted into text format for future processing.

a. Resume dataset from kaggle
	
  This dataset is available from this link. It consists of 962 rows and 2 columns. The first column is the job category and the second contains the resume information in string format. In this dataset, 25 job categories are included. After dropping the duplicates,  around 166 resumes are left in the dataset.

b. Resume data scraped from postjobfree.com
	
  This dataset is obtained by websraping from the postjobfree.com website. The code for web scraping is contained in the github repo. The resumes are obtained by web scraping all the resumes on the first 1190 pages on that website by using the requests and BeautifulSoup packages. Each page contains 10 resumes hence after websracping, a total number of 11899 resumes were obtained (one has request issue). However, only 500 resumes were left after the duplicates were dropped. This might be due to a technical problem during web scraping or that the users intentionally put duplicated resumes online as it can increase the possibility of employers seeing their resumes. The problem will be investigated in the future. There are two columns in the dataset. The first one indicates the job title and the second one contains the resume information in the string form. 

c. Resume data from livecareer.com
	
  This dataset could be downloaded following this link. It contains 2483 resumes from 24 professions. To convert the dataset from pdf format to string format, pdfminer library in Python was utilized. The professions include accountant, advocate, agriculture, apparel, arts, automobile, aviation, banking, BPO, business development, chef, construction, consultant, designer, digital media, engineering, finance, fitness, healthcare, HR, information technology, public relations, sales, and teacher. The distribution of the counts of each category is roughly even, with most professions having around 110 resumes listed. After extracting the text content from the resumes, we put the test into a table and each row of the table corresponds to a resume. There are two columns in the dataset we made, and the first contains the resume string with the second one having the resume holders’ professions. 14 resumes in the dataset are duplicates and they are dropped.
  

## Model

We first cleaned the resume text through removing hyperlinks, special characters, or punctuations, which was done through the stopwords from the nltk library. We also unified the text format by converting all the letters to their lower cases. While the entity recognition can be achieved through the labeled data, we could also customize the entity recognition by adding a new category into the entity ruler. To measure the performance of our named entity recognition model, we used precision, recall, F1-score, and support scores to build a thorough understanding of the model outputs. 
>>>>>>> 6b7f94eb78bc76064075fa643a144488b8d290b0
