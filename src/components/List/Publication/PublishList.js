import React from "react";
import "./List.css";

const PublishList = () => {
    const publish = [
        {
            title: "Domain Generalized Recaptured Screen Image Identification Using SWIN Transformer",
            description: "Proposed a SWIN transformer-based framework tackling image recapture issues with domain generalization. It achieves 82% accuracy and 95% precision, surpassing existing methods.",
            link: "https://arxiv.org/abs/2407.17170"
        },
        {
            title: "Enhancing Image Authenticity Detection: Swin Transformers and Color Frame Analysis for CGI vs. Real Images",
            description: "This research uses Swin Transformers with RGB and CbCrY color analysis to classify CGI and ADI, achieving state-of-the-art accuracy. The model bypasses handcrafted features, ensuring fast, robust detection against noise, blurring, and compression.",
            link: "https://arxiv.org/abs/2409.04742"
        },
        {
            title: "Swin Transformer for Robust Differentiation of Real and Synthetic Images: Intra- and Inter-Dataset Analysis",
            description: "This study proposes a Swin Transformer-based model to differentiate CGI from natural images in the RGB space. Tested on CiFAKE, JSSSTU, and Columbia datasets, it achieved 97-99% accuracy, demonstrating strong domain generalization and reliability for digital image forensics.",
            link: "https://arxiv.org/abs/2409.04734"
        },
        {
            title: "Integrating Deep Feature Extraction and Hybrid ResNet-DenseNet Model for Multi-Class Abnormality Detection in Endoscopic Images",
            description: "This paper presents a deep learning framework for classifying gastrointestinal abnormalities in VCE frames, using an ensemble of DenseNet and ResNet. The model achieves 94% accuracy, with precision up to 1.00 and recall reaching 98%, aiding gastroenterologists in automated diagnosis.",
            link: "https://arxiv.org/abs/2410.18457"
        },
    ];

    return (
        <div className="list-container">
            <ul>
                {publish.map((item, index) => (
                    <li key={index} className="project-item">
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="clickable-link">
                            <h3 className="no-margin">{item.title}</h3>
                            <p className="paragraph">{item.description}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PublishList;
