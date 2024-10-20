import azureDevops from '/public/svg/tools/azureDevops.svg';
import canva from '/public/svg/tools/canva.svg';
import docker from '/public/svg/tools/docker.svg';
import figma from '/public/svg/tools/figma.svg';
import git from '/public/svg/tools/git.svg';
import github from '/public/svg/tools/github.svg';
import msoffice from '/public/svg/tools/msoffice.svg';
import postman from '/public/svg/tools/postman.svg';
import pycharm from '/public/svg/tools/pycharm.svg';
import vscode from '/public/svg/tools/vscode.svg';
import vscommunity from '/public/svg/tools/vscommunity.svg';
import wordpress from '/public/svg/tools/wordpress.svg';

export const toolsImage = (tool) => {
    const toolID = tool.toLowerCase();
    switch (toolID) {
        case 'azureDevops':
            return azureDevops;
        case 'canva':
            return canva;
        case 'docker':
            return docker;
        case 'figma':
            return figma;
        case 'git':
            return git;
        case 'github':
            return github;
        case 'msoffice':
            return msoffice;
        case 'postman':
            return postman;
        case 'pycharm':
            return pycharm;
        case 'vscode':
            return vscode;
        case 'vscommunity':
            return vscommunity;
        case 'wordpress':
            return wordpress;
    }
}