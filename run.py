# DSC180B Code checkpoint
# Feb 14,2022

import os
from tqdm import tqdm
import spacy
from spacy.tokens import DocBin
from src.src import convert_dataturks_to_spacy, trim_entity_spans
from spacy.util import filter_spans
import sys
import subprocess


################### Train Spacy NER.###########
def generate_data(test=False):
    if test == True:
        train_fp = "./test/traindata.json"
        test_fp = "./test/testdata.json"
    else:
        train_fp = "../data/train.json"
        test_fp = "../data/test.json"

    TRAIN_DATA = trim_entity_spans(convert_dataturks_to_spacy(train_fp))
    TEST_DATA = trim_entity_spans(convert_dataturks_to_spacy(test_fp))
    nlp = spacy.blank('en')  # create blank Language class

    db = DocBin()  # create a DocBin object

    for text, annot in tqdm(TRAIN_DATA):  # data in previous format
        doc = nlp.make_doc(text)  # create doc object from text
        ents = []
        for start, end, label in annot["entities"]:  # add character indexes
            if start>end:
                continue
            span = doc.char_span(start, end, label=label, alignment_mode="strict")
            if span is None:
                print("Skipping entity")
            elif (span.text[0]==' ') or (span.text[-1]==' '):
                print("Encountered Whitespace")
            else:
                ents.append(span)
        # pat_orig = len(ents)
        filtered = filter_spans(ents)  # THIS DOES THE TRICK
        # pat_filt = len(filtered)
        doc.ents = filtered

        # print("\nCONVERSION REPORT:")
        # print("Original number of patterns:", pat_orig)
        # print("Number of patterns after overlapping removal:", pat_filt)
        #doc.ents = ents  # label the text with the ents
        db.add(doc)
    os.chdir(r'./data')
    db.to_disk("./train.spacy")  # save the docbin object

    TEST_DATA = trim_entity_spans(convert_dataturks_to_spacy(test_fp))
    nlp = spacy.blank('en')  # create blank Language class

    db = DocBin()  # create a DocBin object

    for text, annot in tqdm(TEST_DATA):  # data in previous format
        doc = nlp.make_doc(text)  # create doc object from text
        ents = []
        for start, end, label in annot["entities"]:  # add character indexes
            if start > end:
                continue
            span = doc.char_span(start, end, label=label, alignment_mode="strict")
            if span is None:
                print("Skipping entity")
            elif (span.text[0] == ' ') or (span.text[-1] == ' '):
                print("Encountered Whitespace")
            else:
                ents.append(span)
        # pat_orig = len(ents)
        filtered = filter_spans(ents)  # THIS DOES THE TRICK
        # pat_filt = len(filtered)
        doc.ents = filtered

        # print("\nCONVERSION REPORT:")
        # print("Original number of patterns:", pat_orig)
        # print("Number of patterns after overlapping removal:", pat_filt)
        # doc.ents = ents  # label the text with the ents
        db.add(doc)
    os.chdir(r'./data')
    db.to_disk("./test.spacy")  # save the docbin object

def main(targets):
    if "test" in targets:
        subprocess.run(["python", "-m", "spacy", "train", "config/config_test.cfg", "--output", "./output",\
                    "--paths.train", "./data/train.spacy", "--paths.dev", "./data/test.spacy"])
    else:
        subprocess.run(["python", "-m", "spacy", "train", "config/config.cfg", "--output", "./output",\
                    "--paths.train", "./data/train.spacy", "--paths.dev", "./data/test.spacy"])


if __name__ == "__main__":
    targets = sys.argv[1:]
    main(targets)
