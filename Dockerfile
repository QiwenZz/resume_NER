# 1) choose base container
# generally use the most recent tag

# base notebook, contains Jupyter and relevant tools
ARG BASE_CONTAINER=ucsdets/datahub-base-notebook:2021.2-stable

# data science notebook
# https://hub.docker.com/repository/docker/ucsdets/datascience-notebook/tags
# ARG BASE_CONTAINER=ucsdets/datascience-notebook:2021.2-stable

# scipy/machine learning (tensorflow, pytorch)
# https://hub.docker.com/repository/docker/ucsdets/scipy-ml-notebook/tags
# ARG BASE_CONTAINER=ucsdets/scipy-ml-notebook:2021.3-42158c8

FROM $BASE_CONTAINER

LABEL maintainer="UC San Diego ITS/ETS <ets-consult@ucsd.edu>"

# 2) change to root to install packages
USER root



RUN apt-get install python-dev 
RUN apt-get install python3-dev 
RUN apt-get install libevent-dev
#RUN apt-get install python-pip && pip install --upgrade pip

#RUN apt-get install gcc
#RUN apt-get install g++


# 3) install packages using notebook user
USER jovyan
FROM python:3.7

RUN pip install setuptools wheel
RUN pip install --upgrade pip

RUN pip install cython
RUN pip install -U spacy
RUN pip install -U torch torchvision torchaudio
RUN pip install spacy[transformers,cuda112]
#RUN pip install -U spacy




# Override command to disable running jupyter notebook at launch
# CMD ["/bin/bash"]

