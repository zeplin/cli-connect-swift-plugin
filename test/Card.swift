//
//  Card.swift
//  Connected Components
//
//  Created by M.Gokay Borulday on 8.11.2019.
//  Copyright © 2019 M.Gokay Borulday. All rights reserved.
//

import UIKit

/// 💳 This is not a gambling card! This is a cool, useful tech card!

final class Card: UIView {

    // MARK: ImagePosition

    enum ImagePosition {
        case right
        case top
        case left
        case bottom
    }

    // MARK: Size

    enum Size {
        case small
        case regular
        case big
    }

    // MARK: Properties

    private let title: String
    private let details: String

    // MARK: Initializers

    init(title: String,
         details: String,
         imageHeader: String? = nil,
         imageSubHeader: String? = nil,
         image: UIImage?,
         imagePosition: ImagePosition = .left,
         size: Size = .regular) {
        self.title = title
        self.details = details

        super.init(frame: .zero)
    }

    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
}
