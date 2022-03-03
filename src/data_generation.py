import os
import tqdm
import spacy
from spacy.tokens import DocBin
from utils import *
from spacy.util import filter_spans
import sys
import subprocess
import json
import subprocess
def generate_data(original):

    train_fp = "../test/traindata.json"
    test_fp = "../test/testdata.json"

    TRAIN_DATA = convert_dataturks_to_spacy(train_fp)
    TEST_DATA = convert_dataturks_to_spacy(test_fp)

    if original is True:
        TRAIN_DATA = trim_special_characters(trim_entity_spans(TRAIN_DATA))
        TEST_DATA = trim_special_characters(trim_entity_spans(TEST_DATA))
        list_to_spacy(TRAIN_DATA, './original_train.spacy')
        list_to_spacy(TEST_DATA, './original_test.spacy')

    else:
        with open('../data/manually_annotation.json', 'r') as f:
            lines = f.readlines()
        for line in lines:
            data = json.loads(line)
            try:
                for text, annotation in data[:6636]:
                    TRAIN_DATA.append((text, annotation))
                for text, annotation in data[6636:]:
                    TEST_DATA.append((text, annotation))
            except:
                pass

        TRAIN_DATA = trim_special_characters(trim_entity_spans(TRAIN_DATA))
        TEST_DATA = trim_special_characters(trim_entity_spans(TEST_DATA))

        list_to_spacy(TRAIN_DATA, './train.spacy')
        list_to_spacy(TEST_DATA, './test.spacy')

def list_to_spacy(lst, export_path):
    nlp = spacy.blank('en')  # create blank Language class

    db = DocBin()  # create a DocBin object

    for text, annot in tqdm.tqdm(lst):  # data in previous format
        doc = nlp.make_doc(text)  # create doc object from text
        ents = []
        for start, end, label in annot["entities"]:  # add character indexes
            if start>end:
                continue
            if label == 'Unlabelled' or label == 'UNKNOWN':
                continue
            span = doc.char_span(start, end, label=correct_label(label), alignment_mode="strict")
            if span is None:
                print("Skipping entity")
            elif (span.text[0]==' ') or (span.text[-1]==' '):
                print("Encountered Whitespace")
            else:
                ents.append(span)
        filtered = filter_spans(ents)  # THIS DOES THE TRICK
        doc.ents = filtered

        db.add(doc)
    os.chdir(r'../data')
    db.to_disk(export_path)  # save the docbin object
    os.chdir(r'../src')

if __name__ == "__main__":
    generate_data(original=False)