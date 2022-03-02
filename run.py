# DSC180B Code checkpoint
# Feb 14,2022

import sys
import subprocess
import argparse
from datetime import datetime



################### Train Spacy NER.###########

def main(args):
    if args['original_data'] is True:
        train_path = "./data/original_train.spacy"
        test_path = "./data/original_test.spacy"
        output_path = "./output/origin_used"
    else:
        train_path = "./data/train.spacy"
        test_path = "./data/test.spacy"
        output_path = "./output/expanded_used"
    if args['model'] == 'spacy':
        config_path = "config/config.cfg"
        output_path += "/fine_tuning/{}".format(args['path'])
    elif args['model'] == 'bert':
        config_path = "config/transformer.cfg"
        output_path += "/fine_tuning/transformer/{}".format(args['path'])
    elif args['model'] == 'scratch':
        config_path = "config/no_fine_tuning_config.cfg"
        output_path += "/no_fine_tuning/{}".format(args['path'])
    if args['test'] is True:
        config_path = "config/config_test.cfg"
        output_path = "./output/test/{}".format(args['path'])

    print('config path is:', config_path)
    print('output path is:', output_path)
    print('training and testing paths are:', train_path, test_path)
    subprocess.run(["python", "-m", "spacy", "train", config_path, "--output", output_path,\
                "--paths.train", train_path, "--paths.dev", test_path])



if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='NER RESUME')
    parser.add_argument('--test', default=False, type=lambda x: (str(x).lower() == 'true'),
                        help='whether to run the test')
    parser.add_argument('--fine-tuning', default=False, type=lambda x: (str(x).lower() == 'true'),
                        help='whether to fine tune')
    parser.add_argument('--original-data', default=False, type=lambda x: (str(x).lower() == 'true'),
                        help='whether to use the original data(220 resumes)')
    parser.add_argument('--path', default=datetime.now().strftime('%Y-%m-%d-%H%M%S'), type=str,
                        help='Default log output path if not specified')
    parser.add_argument('--model', default='spacy', type=str,
                        help='which pre trained model to use on training')


    args = vars(parser.parse_args())
    main(args)

